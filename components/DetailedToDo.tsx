import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
import SubTask from './SubTask';

interface Subtask {
  id: string;
  name: string;
}

interface DetailedToDoProps {
  //name of the to do
  name: string;
  subTasks: Subtask[];
  onBack: () => void;
  onSave: (name: string, subTasks: Subtask[]) => void;
}

const DetailedToDo: React.FC<DetailedToDoProps> = ({
  name,
  subTasks: initialSubTasks,
  onBack,
  onSave,
}) => {
  const [editName, setEditName] = useState<string>(name);
  const [subTasks, setSubTasks] = useState<Subtask[]>(initialSubTasks);

  //for editing
  useEffect(() => {
    setEditName(name);
  }, [name]);


  //saving the name of what i edited
  const handleSave = () => {
    onSave(editName, subTasks);
    onBack();
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.buttonContainer1}>
        <Button title="Save/Edit/Add" onPress={handleSave} />
        <Button title="Cancel" onPress={onBack} />
      </View>

      <Text style={styles.title}>Edit To-Do Item</Text>
      <TextInput
        style={styles.input}
        value={editName}
        onChangeText={setEditName}
      />
      <Text style={styles.title}>Subtask</Text>
      <SubTask subTasks={subTasks} setSubTasks={setSubTasks} />
    </View>
  );
};
export default DetailedToDo;
