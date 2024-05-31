const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT });

server.on("connection", (socket) => {
  console.log("A new client connected");

  // Gửi dữ liệu cảm biến ban đầu đến client
  const initialSensorData = { temperature: 0, humidity: 0 }; // Thay đổi dữ liệu cảm biến nếu cần
  socket.send(JSON.stringify(initialSensorData));

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
      } else {
        console.log("Unknown message type");
      }
    } catch (error) {
      console.error("Error parsing message:", error);
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

console.log(`Server is running on port ${PORT}`);
