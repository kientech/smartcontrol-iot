const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT });

server.on("connection", (socket) => {
  console.log("A new client connected");

  socket.on("message", (message) => {
    console.log("Received:", message.toString());
    const parsedMessage = JSON.parse(message);

    if (parsedMessage.type === "sensorData") {
      // Xử lý dữ liệu cảm biến
      const { temperature, humidity } = parsedMessage;
      const dataToSend = { temperature, humidity };
      console.log(`Temperature: ${temperature} - Humidity: ${humidity}`);

      // Gửi lại dữ liệu cảm biến cho tất cả các client
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
      server.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "fanControl", status }));
        }
      });
    } else {
      console.log("Unknown message type");
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
