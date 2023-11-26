import React, {useState} from 'react';
import {View, Button} from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  return (
    <MainLayout>
      <View>
        <ToDoList tasks={tasks} />
        <ToDoForm onAddTask={addTask} />

        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}

export default HomeScreen;
