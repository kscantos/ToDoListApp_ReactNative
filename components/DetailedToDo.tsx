import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './styles';

interface DetailedToDoProps {
  //name of the to do
  name: string;
  onBack: () => void;
  onSave: (name: string) => void;
}

const DetailedToDo: React.FC<DetailedToDoProps> = ({
  name,
  onBack,
  onSave,
}) => {
  const [editName, setEditName] = useState<string>(name);


  //for editing
  useEffect(() => {
    setEditName(name);
  }, [name]);
  //saving the name of what i edited
  const handleSave = () => {
    onSave(editName);
    onBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit To-Do Item</Text>
      <TextInput
        style={styles.input}
        value={editName}
        onChangeText={setEditName}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save" onPress={handleSave} />
        <Button title="Cancel" onPress={onBack} />
      </View>
    </View>
  );
};
export default DetailedToDo;
