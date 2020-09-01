import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Map = props => {

  return (
    <View style={styles.container}>
      <Text>Map</Text>
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

export default Map;