import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Screen
import Home from '../screens/app/Home';
import Settings from '../screens/app/Settings';
import Profil from '../screens/app/Profil';
import Map from '../screens/app/Map';
import SettingsDrawer from './SettingsDrawer';

const Tab = createBottomTabNavigator();

const AppNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsDrawer} />
      <Tab.Screen name="Profil" component={Profil} />
      <Tab.Screen name="Map" component={Map} />
    </Tab.Navigator>
  );
}

export default AppNav;