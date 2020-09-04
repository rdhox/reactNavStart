import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import OnBoardingNav from './navigation/OnBoardingNav';
import AppNav from './navigation/AppNav';
import { useStore } from './store'; 

import './utils/i18n';

export default function App() {

  const isReady = useStore(state => state.isReady);

  return (
    <NavigationContainer>
      <View style={styles.container}>
        {!isReady ? (<OnBoardingNav />):(<AppNav />)}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
