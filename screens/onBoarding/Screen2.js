import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen2 = props => {

  function handlePress() {
    navigation.navigate("Screen3");
  }

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1}}
      contentContainerStyle={styles.container}
    >
      <View style={styles.form}>
        <TextInput style={styles.input} keyboardType="number-pad" />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handlePress}>
          <Text>Screen2</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'red',
    padding: 10,
  },
  input: {
    width: 300,
    borderWidth: 1
  },
  form: {
    flex: 5,
    width: '100%',
    borderWidth: 2,
    borderColor: 'blue',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    borderWidth: 2,
    borderColor: 'green'
  }
});

export default Screen2;