import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Button, Animated, TouchableWithoutFeedback } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const AnimButton = props => {

  function handlePress() {
    setIsActive(true);
    Animated.timing(valueAnim3, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true
    }).start(() => {
      onHandlePress();
    });
  }

  const valueAnim = useRef(new Animated.Value(0)).current;
  const valueAnim2 = useRef(new Animated.Value(0)).current;
  const valueAnim3 = useRef(new Animated.Value(0)).current;


  const [ isActive, setIsActive ] = useState(false);
  const navigation= useNavigation();

  const { onHandlePress } = props;

  function animCircles() {
    valueAnim.setValue(0);
    valueAnim2.setValue(0);
    Animated.stagger(300, [
      Animated.timing(valueAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(valueAnim2, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      })
    ]).start(() => {
      animCircles();
    })
  }

  useEffect(() => {
    const unsub = navigation.addListener('focus', () => {
      if(isActive) {
        setIsActive(false);
      }
      animCircles();
    });

    return () => {
      unsub();
    }
  }, [animCircles]);


  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View
        style={styles.container}
      >
      {isActive ? (
        <Animated.View
          style={{
            position: 'absolute',
            width: 120,
            height: 120,
            borderRadius: 60,
            borderWidth: 2,
            // opacity: valueAnim3.interpolate({ inputRange: [0, 1], outputRange: [1, 0]}),
            transform: [
              { scale: valueAnim3.interpolate({ inputRange: [0, 0.2, 1], outputRange:[0.2, 1, 0]}) }
            ]
          }}
        />
      ):(
        <>
          <Animated.View
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: '#4c669f',
              opacity: valueAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0]}),
              transform: [
                { scale: valueAnim }
              ]
            }}
          />
          <Animated.View
            style={{
              position: 'absolute',
              width: 80,
              height: 80,
              borderRadius: 40,
              backgroundColor: '#192f6a',
              opacity: valueAnim2.interpolate({ inputRange: [0, 1], outputRange: [1, 0]}),
              transform: [
                { scale: valueAnim2 }
              ]
            }}
          />
        </>
      )}
        <Octicons name="home" size={24} color="black" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AnimButton;