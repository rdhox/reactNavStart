import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const General = props => {

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>General</Text>
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

export default General;