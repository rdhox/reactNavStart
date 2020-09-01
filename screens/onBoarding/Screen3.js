import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Screen3 = props => {

  function goToApp() {
    route.params?.finishOnBoarding() || null;
  }

  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToApp}>
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