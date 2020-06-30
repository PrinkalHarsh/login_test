import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '@components';

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

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const authContext = React.useMemo(
    () => ({
      signIn: async (userName, password) => {
        // setUserToken('Prinkal');
        // setIsLoading(false);
        let userToken;
        userToken = null;
        if (userName != '' && password != '') {
          try {
            userToken = 'Prinkal';
            // const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('userToken', userToken);
          } catch (e) {
            console.log('catch login', e);
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
          // const jsonValue = JSON.stringify(value)
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log('catch lo out', e);
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

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;
