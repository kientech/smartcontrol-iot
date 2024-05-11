import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import io from "socket.io-client";

const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io("http://localhost:3000");

    newSocket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    newSocket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      socket.emit("message", inputText);
      setInputText("");
    }
  };

  const handleCustomMessage = (number) => {
    if (socket) {
      if (number === 0) {
        socket.emit("message", "0");
      } else if (number === 1) {
        socket.emit("message", "1");
      }
    }
  };

  return (
    <SafeAreaView>
      <Text>Chat Messages:</Text>
      {messages.map((message, index) => (
        <Text key={index}>{message}</Text>
      ))}
      <TextInput
        style={{
          height: 40,
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginVertical: 10,
        }}
        onChangeText={setInputText}
        value={inputText}
      />
      <TouchableOpacity
        style={{ color: "#000" }}
        title="Send"
        onPress={sendMessage}
      >
        <Text style={{ color: "#000" }}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ color: "#000" }}
        title="Send 0"
        onPress={() => handleCustomMessage(0)}
      >
        <Text style={{ color: "#000" }}>Send 0</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ color: "#000" }}
        title="Send 1"
        onPress={() => handleCustomMessage(1)}
      >
        <Text style={{ color: "#000" }}>Send 1</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ChatApp;