import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import styles from './styles';

interface Subtask {
  id: string;
  name: string;
}

interface subTaskProps {
  subTasks: Subtask[];
  setSubTasks: React.Dispatch<React.SetStateAction<Subtask[]>>;
}

const Subtask: React.FC<subTaskProps> = ({ subTasks, setSubTasks }) => {
  const [subtaskName, setSubtaskName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const generateUniqueId = () => {
    return (Math.random() * 100000).toFixed(0);
  };

  // add edit subtask
  const addOrEditSubtask = () => {
    if (subtaskName.trim()) {
      if (editingId) {
        const updatedSubTasks = subTasks.map(Subtask =>
            Subtask.id === editingId
            ? { ...Subtask, name: subtaskName }
            : Subtask,
        );
        setSubTasks(updatedSubTasks);
        setEditingId(null);
      } else {
        const newSubTask = {
          id: generateUniqueId(),
          name: subtaskName,
        };
        setSubTasks((prevTasks) => [newSubTask, ...prevTasks]);
      }
      setSubtaskName('');
    }
  };

  // delete
  const deleteSubTask = (id: string) => {
    setSubTasks(prevSubtasks =>
      prevSubtasks.filter(subTask => subTask.id !== id),
    );
  };

  //edit
  const startEditing = (id: string, name: string) => {
    setEditingId(id);
    setSubtaskName(name);
  };

  useEffect(() => {
    if (subTasks.length > 0) {
      addOrEditSubtask();
    }
  }, [subTasks]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Subtask"
        value={subtaskName}
        onChangeText={setSubtaskName}
      />
      <Button
        title={editingId ? 'Update Subtask' : 'Add Subtask'}
        onPress={addOrEditSubtask}
      />
      <FlatList
        data={subTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Edit"
                onPress={() => startEditing(item.id, item.name)}
              />
              <Button title="Delete" onPress={() => deleteSubTask(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Subtask;
