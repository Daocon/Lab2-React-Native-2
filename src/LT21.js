import {useState} from 'react';
import {Button, Text, View} from 'react-native';

const LT21 = () => {
  const [count, setCount] = useState(0);
  const tang = () => {
    setCount(count + 1);
  };
  return (
    <View>
      <Text>So lan click: {count}</Text>
      <Button title="Tang so" onPress={tang} />
    </View>
  );
};

export default LT21;
