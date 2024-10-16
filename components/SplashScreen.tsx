import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import styles from './styles';

const SplashScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // fade in and fade out
    Animated.sequence([
      Animated.timing(opacityAnim, {
        //opacity
        toValue: 1,
        duration: 2000,
        //for optimization
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      //when the loading is completed
      onFinish();
    });
  }, [opacityAnim, onFinish]);

  return (
    <Animated.View style={[styles.splashContainer, { opacity: opacityAnim }]}>
      <Text style={styles.splashText}>My To-Do List</Text>
    </Animated.View>
  );
};

export default SplashScreen;
