import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function ToDoForm({ onAddTask }) {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask) { 
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={newTask}
        onChangeText={setNewTask} 
      />
      <Button title="Add" onPress={handleAddTask} color="#D41267" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    borderRadius: 5,
  },
});
