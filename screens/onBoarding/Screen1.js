import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1 = props => {

  function handlePress() {
    navigation.navigate("Screen2");
  }

  const navigation = useNavigation();

  const valueAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(valueAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <LinearGradient
      // Button Linear Gradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <TouchableOpacity onPress={handlePress}>
        <Animated.Text
          style={[styles.title, {
            opacity: valueAnim,
            transform: [
              { scale: valueAnim },
              { rotateZ: valueAnim.interpolate({ inputRange: [0, 1], outputRange: ['0deg', '720deg'] })}
            ]
          }]}
        >
          Hello!
        </Animated.Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  }
});

export default Screen1;