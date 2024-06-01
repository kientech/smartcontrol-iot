const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT });

server.on("connection", (socket) => {
  console.log("A new client connected");

  const generateRandomSensorData = () => ({
    temp1: (Math.random() * (30.99 - 29.0) + 29.0).toFixed(2),
    temp2: (Math.random() * (30.99 - 29.0) + 29.0).toFixed(2),
  });

  // Send initial sensor data
  const initialSensorData = generateRandomSensorData();
  socket.send(JSON.stringify(initialSensorData));

  // Send updated sensor data every second
  const intervalId = setInterval(() => {
    const updatedSensorData = generateRandomSensorData();
    console.log("Reveived data:", updatedSensorData)
    socket.send(JSON.stringify(updatedSensorData));
  }, 1000);

  // send data from sensors to server
  // const initialSensorData = { temperature: 0, humidity: 0 }; // Thay đổi dữ liệu cảm biến nếu cần
  // socket.send(JSON.stringify(initialSensorData));

  socket.on("message", (message) => {
    console.log("Received:", message.toString());

    try {
      const parsedMessage = JSON.parse(message);

      if (parsedMessage.type === "sensorData") {
        // Xử lý dữ liệu cảm biến
        const { temperature, humidity } = parsedMessage;
        console.log(`Temperature: ${temperature} - Humidity: ${humidity}`);

        // Gửi lại dữ liệu cảm biến cho tất cả các client
        const dataToSend = { temperature, humidity };
        socket.send(JSON.stringify(dataToSend));
        server.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(dataToSend));
          }
        });
      } else if (parsedMessage.type === "fanControl") {
        // Xử lý điều khiển quạt
        const { status } = parsedMessage;
        console.log(`Fan status: ${status}`);

        // Gửi lại trạng thái quạt cho tất cả các client
        const fanStatus = { type: "fanControl", status };
        server.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(fanStatus));
          }
        });
      } else if (parsedMessage.type === "ledControl") {
        // Xử lý điều khiển đèn LED
        const { status } = parsedMessage;
        console.log(`LED status: ${status}`);

        // Gửi lại trạng thái đèn LED cho tất cả các client
        const ledStatus = { type: "ledControl", status };
        server.clients.forEach((client) => {
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(ledStatus));
          }
        });
      } else {
        console.log("Unknown message type");
      }
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
    clearInterval(intervalId);
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

console.log(`Server is running on port ${PORT}`);
