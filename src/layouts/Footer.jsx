import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>My To-Do App © {new Date().getFullYear()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B06161',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Footer;
