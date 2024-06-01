const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: PORT });

server.on("connection", (socket) => {
  console.log("A new client connected");

  // send initial data from sensors to the client
  const initialSensorData = { temperature: 0, humidity: 0 };
  socket.send(JSON.stringify(initialSensorData));

  socket.on("message", (message) => {
    console.log("Received:", message.toString());

    try {
      // Attempt to parse the message
      const parsedMessage = JSON.parse(message);

      // Check the message type and handle accordingly
      switch (parsedMessage.type) {
        case "sensorData":
          handleSensorData(parsedMessage);
          break;
        case "fanControl":
          handleFanControl(parsedMessage);
          break;
        case "ledControl":
          handleLedControl(parsedMessage);
          break;
        default:
          console.log("Unknown message type");
      }
    } catch (error) {
      console.error("Error parsing message:", error);
      socket.send(JSON.stringify({ error: "Invalid message format" }));
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

function handleSensorData(parsedMessage) {
  const { temperature, humidity } = parsedMessage;
  console.log(`Temperature: ${temperature} - Humidity: ${humidity}`);

  const dataToSend = { temperature, humidity };
  broadcastToClients(dataToSend);
}

function handleFanControl(parsedMessage) {
  const { status } = parsedMessage;
  console.log(`Fan status: ${status}`);

  const fanStatus = { type: "fanControl", status };
  broadcastToClients(fanStatus);
}

function handleLedControl(parsedMessage) {
  const { status } = parsedMessage;
  console.log(`LED status: ${status}`);

  const ledStatus = { type: "ledControl", status };
  broadcastToClients(ledStatus);
}

function broadcastToClients(data) {
  server.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

console.log(`Server is running on port ${PORT}`);
