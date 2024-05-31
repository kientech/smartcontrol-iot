import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import WebSocket from 'react-native-websocket';

const App = () => {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://test-i ot-35773ff47743.herokuapp.com/'); // Thay thế bằng địa chỉ IP hoặc tên miền của máy chủ

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setTemperature(data.temperature);
      setHumidity(data.humidity);
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {temperature !== null && humidity !== null ? (
        <View>
          <Text>Temperature: {temperature}</Text>
          <Text>Humidity: {humidity}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default App;
