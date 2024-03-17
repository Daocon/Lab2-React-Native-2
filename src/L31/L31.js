import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const L31 = () => {
  const position = useRef(new Animated.ValueXY()).current; // lay vi tri hien tai
  const windowHeight = Dimensions.get('window').height; //lay chieu cao
  useEffect(() => {
    startAnimation();
  });
  const startAnimation = () => {
    const randomY = Math.floor(Math.random() * windowHeight); // vi tri bat ky theo y
    Animated.timing(position, {
      toValue: {x: 0, y: randomY},
      duration: 3000,
      useNativeDriver: false,
    }).start(() => startAnimation()); // lap di lap lai
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, position.getLayout()]} />
    </View>
  );
};

export default L31;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
