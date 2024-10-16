import React, { useState } from 'react';
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native';
import SearchFilter from './SearchFilter';
import Pagination from './Pagination';
import styles from './styles';

interface Subtask {
  id: string;
  name: string;
}

interface ToDoList {
  id: string;
  name: string;
  date: string;
  description?: string;
  subTasks: Subtask[];
}

interface ListProps {
  //array
  lists: ToDoList[];
  //fucntion to update
  setLists: React.Dispatch<React.SetStateAction<ToDoList[]>>;
  deleteList: (id: string) => void;
  onItemPress: (item: ToDoList) => void; //update
}

//managing
const Lists: React.FC<ListProps> = ({
  lists,
  setLists,
  deleteList,
  onItemPress,
}) => {
  //name
  const [listName, setListName] = useState<string>('');
  //edit
  const [editingId, setEditingId] = useState<string | null>(null);
  //search
  const [searchFilter, setSearchFilter] = useState<string>('');

  //random id
  const generateUniqueId = () => {
    return (Math.random() * 100000).toFixed(0);
  };

  //add or edit
  const addOrEditList = () => {
    const currentDate = new Date().toLocaleString();
    if (listName.trim()) {
      if (editingId) {
        //for editing
        const updatedList = lists.map(list =>
          list.id === editingId
            ? //update the name ?
              { ...list, name: listName, date: currentDate }
            : list,
        );
        setLists(updatedList);
        setEditingId(null);
      } else {
        const newItem: ToDoList = {
          id: generateUniqueId(),
          name: listName,
          date: currentDate,
          description: '',
          subTasks: [],
        };
        setLists(prevLists => [newItem, ...prevLists]);
      }
      setListName('');
    }
  };

  //search based filtering
  const filteredList = lists.filter(list =>
    list.name.toLowerCase().includes(searchFilter.toLowerCase()),
  );

  const renderListItem = ({ item }: { item: ToDoList }) => (
    <View style={styles.listItem}>
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <Text style={styles.listText}>{item.name}</Text>
        {item.subTasks.length > 0 && (
          <View>
            {item.subTasks.map(subTask => (
              <Text key={subTask.id} style={styles.subTaskText}>
                - {subTask.name}
              </Text>
            ))}
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteList(item.id)}>
          <Text style={styles.deleteText}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My To-Do Lists</Text>
        <SearchFilter
          searchTerm={searchFilter}
          setSearchTerm={setSearchFilter}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add To-do"
        value={listName}
        onChangeText={setListName}
      />
      <Button title={editingId ? 'Update' : 'Add'} onPress={addOrEditList} />
      <Pagination
        data={filteredList}
        renderItem={renderListItem}
        itemsPerPage={3}
      />
    </View>
  );
};

export default Lists;
