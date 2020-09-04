import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

import Title from '../../components/atoms/Title'

const Home = props => {

  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <Title color="blue" fontSize={25} fontWeight="bold" >{t('App.Home.title')}</Title>
      <Button title="Changer lang" onPress={() => i18n.changeLanguage('en')} />
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

export default Home;