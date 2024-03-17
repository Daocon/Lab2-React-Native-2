import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const L33 = () => {
  const [expanded, setexpanded] = useState(false);
  const [animation] = useState(new Animated.Value(60)); //chieu cao ban dau cua header
  const changeHeader = () => {
    const initialValue = expanded ? 200 : 60;
    const finalValue = expanded ? 60 : 200;
    setexpanded(!expanded);
    animation.setValue(initialValue);
    Animated.spring(animation, {
      toValue: finalValue,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, {height: animation}]}>
        <Text style={styles.headerText}>Mo rong hang'</Text>
      </Animated.View>
      <TouchableOpacity onPress={changeHeader} style={styles.button}>
        <Text>{expanded ? 'Thu hep' : 'Mo rong'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default L33;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'orange',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
