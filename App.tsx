import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import SplashScreen from './components/SplashScreen';
import Lists from './components/Lists';
import DetailedToDo from './components/DetailedToDo';
import styles from './components/styles';

interface ToDoList {
  id: string;
  name: string;
  date: string;
  description?: string;
}

const App = () => {
  //what currentscreen
  const [currentScreen, setCurrentScreen] = useState<
    'Splash' | 'List' | 'Detail'
  >('Splash');
  //detailed
  const [selectedToDo, setSelectedToDo] = useState<ToDoList | null>(null);
  const [lists, setLists] = useState<ToDoList[]>([]);

  // add new
  const addList = (name: string, description: string) => {
    const newList: ToDoList = {
      //genrate
      id: Math.random().toString(),
      name,
      //date n time (w/ issue)
      date: new Date().toLocaleString(),
      description,
    };
    setLists(prevLists => [...prevLists, newList]);
  };

  // delete
  const deleteList = (id: string) => {
    setLists(prevLists => prevLists.filter(list => list.id !== id));
  };

  // splash timer
  const handleFinishSplash = () => {
    setCurrentScreen('List');
  };

  // detailed view w issue
  const goDetailed = (todo: ToDoList) => {
    setSelectedToDo(todo);
    setCurrentScreen('Detail');
  };

  // return
  const returnToLists = () => {
    setSelectedToDo(null);
    setCurrentScreen('List');
  };

  // edited
  const handleSave = (name: string) => {
    if (selectedToDo) {
      //map over n update
      setLists(prevLists =>
        prevLists.map(list =>
          list.id === selectedToDo.id ? { ...list, name } : list,
        ),
      );
      returnToLists();
    }
  };

  //for rendering screen
  return (
    <View style={styles.container}>
      {currentScreen === 'Splash' ? (
        <SplashScreen onFinish={handleFinishSplash} />
      ) : currentScreen === 'Detail' && selectedToDo ? (
        <DetailedToDo
          name={selectedToDo.name}
          onBack={returnToLists}
          onSave={handleSave}
        />
      ) : (
        <Lists
          lists={lists}
          setLists={setLists}
          deleteList={deleteList}
          onItemPress={goDetailed}
        />
      )}
    </View>
  );
};

export default App;
