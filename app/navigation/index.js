import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import {SigninScreen, WelcomeScreen} from '@screens';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator headerMode="none">
      {/* <Stack.Screen name="signin" component={SigninScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
      {loginState.userToken != null ? (
        <Stack.Screen name="welcome" component={WelcomeScreen} />
      ) : (
        <Stack.Screen name="signin" component={SigninScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
