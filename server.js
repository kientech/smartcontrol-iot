    const http = require("http");
    const server = http.createServer();
    const io = require("socket.io")(server);
    const express = require("express");
    const app = express();

    app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
    });

    let fanStatus = "Off";
    let ledStatus = "Off";

    io.on("connection", (socket) => {
    console.log("A user connected");
    socket.emit("fanStatus", fanStatus);
    socket.on("toggleFan", () => {
        fanStatus = fanStatus === "On" ? "Off" : "On";
        io.emit("fanStatus", fanStatus);
        console.log("Fan status:", fanStatus);
    });

    socket.emit("ledStatus", ledStatus);
    socket.on("toggleLed", () => {
        ledStatus = ledStatus === "On" ? "Off" : "On";
        io.emit("ledStatus", ledStatus);
        console.log("Led status:", ledStatus);
    });

    setInterval(() => {
        const temperature = Math.floor(Math.random() * (40 - 20 + 1)) + 20; // Giả lập nhiệt độ từ 20°C đến 40°C
        const humidity = Math.floor(Math.random() * (80 - 50 + 1)) + 50; // Giả lập độ ẩm từ 50% đến 80%
        const co2 = Math.floor(Math.random() * (800 - 400 + 1)) + 400; // Giả lập CO2 từ 400 ppm đến 800 ppm
        socket.emit("sensorData", { temperature, humidity, co2 });
        console.log(`Temperature: ${temperature} - Humidity: ${humidity} - CO2: ${co2}`);
      }, 2000); // Cứ mỗi 2 giây gửi dữ liệu mới về client

    

    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
    });

    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    });
