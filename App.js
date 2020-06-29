import 'react-native-gesture-handler';
import React, {useState, useEffect, useMemo, useContext} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen, WelcomeScreen} from '@screens';
import {ActivityIndicator} from 'react-native';
import {AuthContext} from '@components';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        // setUserToken('Prinkal');
        // setIsLoading(false);
        let userToken;
        userToken = null;
        if (userName == 'User' && password == 'Pass') {
          try {
            userToken = 'Prinkal';
            // const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log('catch', e);
          }
        } else {
          console.log('not called');
        }
        console.log('user Token', userToken);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      logOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          userToken = 'Prinkal';
          // const jsonValue = JSON.stringify(value)
          await AsyncStorage.removeItem('userToken', userToken);
        } catch (e) {
          console.log('catch', e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        // const jsonValue = JSON.stringify(value)
      } catch (e) {
        console.log('catch effect', e);
      }
      console.log('user Token effect', userToken);
      dispatch({type: 'REGISTER', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {loginState.userToken != null ? (
            <Stack.Screen name="welcome" component={WelcomeScreen} />
          ) : (
            <Stack.Screen name="signin" component={SigninScreen} />
          )}

          {/* <Stack.Screen name="signin" component={SigninScreen} />
          <Stack.Screen name="welcome" component={WelcomeScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
