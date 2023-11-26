import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
    <View style={styles.container}>
      <Header title="My To-Do App" />
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
});

export default MainLayout;
