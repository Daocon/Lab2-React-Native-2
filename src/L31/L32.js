import {
  Animated,
  FlatList,
  PanResponder,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';

const L32 = () => {
  const translateY = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dy: translateY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, gestureState) => {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;

  const renderItem = ({item}) => {
    return (
      <Animated.View
        style={[styles.item, {transform: [{translateY}]}]}
        {...panResponder.panHandlers}>
        <Text style={styles.text}>FlatList items</Text>
      </Animated.View>
    );
  };
  return (
    <View>
      <FlatList
        data={Array.from({length: 4}, (_, index) => ({key: `${index}`}))}
        renderItem={renderItem}
      />
    </View>
  );
};

export default L32;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  item: {
    width: 200,
    height: 100,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 5,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});
