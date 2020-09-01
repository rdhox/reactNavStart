import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = props => {

  function handlePress() {
    navigation.navigate("Screen3");
  }

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Screen2</Text>
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

export default Screen2;