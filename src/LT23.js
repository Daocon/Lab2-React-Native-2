import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const LT23 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Anh Dao dep trai quaaaazzz');
  });
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Up" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default LT23;
