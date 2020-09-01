import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import OnBoardingNav from './navigation/OnBoardingNav';
import AppNav from './navigation/AppNav';

export default function App() {

  function finishOnBoarding() {
    setOnBoarding(false);
  }

  const [ onBoarding, setOnBoarding ] = useState(true);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {onBoarding ? (<OnBoardingNav finishOnBoarding={finishOnBoarding}  />):(<AppNav />)}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
