import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  headerText: string;
}

const Header: React.FC<HeaderProps> = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
