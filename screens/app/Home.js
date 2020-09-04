import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Button, Animated } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/atoms/Title';
import AnimButton from '../../components/atoms/AnimButton';

const Home = props => {

  const { t, i18n } = useTranslation();
  const navigation= useNavigation();


  return (
    <View style={styles.container}>
      <AnimButton onHandlePress={() => navigation.navigate('Profil')} />
      <Title color="blue" fontSize={25} fontWeight="bold" >{t('App.Home.title')}</Title>
      <Button title="Changer lang" onPress={() => i18n.changeLanguage('en')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
});

export default Home;