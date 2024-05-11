import React, { useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native";
import { io } from "socket.io-client";

export default function LedControl() {
  const [socket, setSocket] = useState(null);
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    const newSocket = io("wss://smartapp-iot-1.onrender.com");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("sensorData", (data) => {
      setSensorData(data);
    });

    return () => {};
  }, [socket]);
  const { temperature, humidity, co2 } = sensorData || {};

  return (
    <SafeAreaView>
      <Text style={{ color: "black" }}>
        {`Temperature: ${temperature}, Humidity: ${humidity}, CO2: ${co2}`}
      </Text>
    </SafeAreaView>
  );
}
