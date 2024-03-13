import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';

const Child = ({onclick}) => {
  return (
    <View>
      <Button title="Click me" onPress={onclick} />
    </View>
  );
};

const LT24 = () => {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Child onclick={handleClick} />
    </View>
  );
};

export default LT24;

const styles = StyleSheet.create({});
