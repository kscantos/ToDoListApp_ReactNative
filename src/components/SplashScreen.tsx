import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SplashScreen: React.FC = () => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.splashText}>My To-Do List</Text>
    </View>
  );
};

export default SplashScreen;
