import React from 'react';
import {View, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  return (
    <MainLayout>
      <View>
        <Text>App Name: My To Do List App</Text>
        <Text>Developer: [Khang Trinh]</Text>
        <Text>Date: {new Date().toLocaleDateString()}</Text>
        <Button
          title="Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </MainLayout>
  );
}

export default AboutScreen;
