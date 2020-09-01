import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Profil = props => {

  return (
    <View style={styles.container}>
      <Text>Profil</Text>
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

export default Profil;