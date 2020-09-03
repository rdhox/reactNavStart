import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// import components
import Screen1 from '../screens/onBoarding/Screen1';
import Screen2 from '../screens/onBoarding/Screen2';
import Screen3 from '../screens/onBoarding/Screen3';

const OnBoardingStack = createStackNavigator();

const OnBoardingNav = props => {

  const { finishOnBoarding } = props;

  return (
    <OnBoardingStack.Navigator
      initialRouteName="Screen1"
      headerMode="none"
    >
      <OnBoardingStack.Screen name="Screen1" component={Screen1} />
      <OnBoardingStack.Screen name="Screen2" component={Screen2} />
      <OnBoardingStack.Screen name="Screen3" component={Screen3} initialParams={{finishOnBoarding}} />
    </OnBoardingStack.Navigator>
  );
};

export default OnBoardingNav;