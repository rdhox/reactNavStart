import React from 'react';

import General from '../screens/settings/General';

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const SettingsDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="General" component={General} />
    </Drawer.Navigator>
  );
}

export default SettingsDrawer;