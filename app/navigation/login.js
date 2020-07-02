import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen, WelcomeScreen} from '@screens';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      {/* {loginState.userToken != null ? (
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      ) : (
        <Stack.Screen name="signin" component={SigninScreen} />
      )} */}
    </Stack.Navigator>
  );
};
