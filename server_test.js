// Import thư viện cần thiết
const WebSocket = require("ws");

// Tạo server WebSocket
const wss = new WebSocket.Server({ port: 8080 });

// Lắng nghe sự kiện kết nối từ client
wss.on("connection", function connection(ws) {
  console.log("Client connected");
  const sendSensorData = () => {
    const temperature = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Giả lập nhiệt độ từ 20°C đến 40°C
    const humidity = Math.floor(Math.random() * (80 - 50 + 1)) + 50; // Giả lập độ ẩm từ 50% đến 80%
    const co2 = Math.floor(Math.random() * (800 - 400 + 1)) + 400; // Giả lập CO2 từ 400 ppm đến 800 ppm
    const sensorData = { temperature, humidity, co2 };
    ws.send(JSON.stringify(sensorData)); // Chuyển đổi sang chuỗi JSON trước khi gửi
    console.log(
      `Temperature: ${temperature} - Humidity: ${humidity} - CO2: ${co2}`
    );
  };
  const sensorDataInterval = setInterval(sendSensorData, 2000);

  // Lắng nghe các thông điệp từ client
  ws.on("message", function incoming(message) {
    console.log("Received: %s", message);

    // Xử lý các thông điệp nhận được từ client
    switch (message.toString()) {
      case "turnOnFan":
        console.log("Turning on the fan");
        // Thực hiện các hành động cần thiết để bật quạt
        // Ví dụ: gửi thông điệp phản hồi cho client
        ws.send("Fan is turned on");
        break;
      case "turnOffFan":
        console.log("Turning off the fan");
        // Thực hiện các hành động cần thiết để tắt quạt
        // Ví dụ: gửi thông điệp phản hồi cho client
        ws.send("Fan is turned off");
        break;
      case "turnOnLed":
        console.log("Turning on the LED");
        // Thực hiện các hành động cần thiết để bật đèn LED
        // Ví dụ: gửi thông điệp phản hồi cho client
        ws.send("LED is turned on");
        break;
      case "turnOffLed":
        console.log("Turning off the LED");
        // Thực hiện các hành động cần thiết để tắt đèn LED
        // Ví dụ: gửi thông điệp phản hồi cho client
        ws.send("LED is turned off");
        break;
      default:
        console.log("Unknown message received");
    }
  });

  // Xử lý sự kiện đóng kết nối từ client
  ws.on("close", function close() {
    console.log("Client disconnected");
  });
});
