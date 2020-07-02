import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen, WelcomeScreen} from '@screens';

const Stack = createStackNavigator();

export const Navigation = ({loginState}) => {
  // console.log('navigation screen', loginState);
  // console.log('navigation screen', userToken);
  return (
    <Stack.Navigator headerMode="none">
      {loginState.userToken != null ? (
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      ) : (
        <Stack.Screen name="signin" component={SigninScreen} />
      )}
    </Stack.Navigator>
  );
};
