import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useStore } from '../../store';

const Screen3 = props => {

  const setIsReady = useStore.getState().setIsReady;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsReady(true)}>
        <Text>Screen3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Screen3;