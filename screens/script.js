const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

let lightState = "Off";

io.on("connection", (socket) => {
  console.log("A user connected");

  // Send initial light state to the client
  socket.emit("lightState", lightState);

  socket.on("message", (data) => {
    console.log(data);
    io.emit("message", data);
  });

  // Handle the toggleLight event
  socket.on(`${lightState}`, () => {
    lightState = lightState === "On" ? "Off" : "On";
    console.log(lightState);
    io.emit("lightState", lightState); 
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

http.listen(3000, () => {
  console.log("Server is listening on port 3000");
});