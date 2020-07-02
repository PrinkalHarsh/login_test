// import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Navigation} from '@navigation';
// import {SigninScreen, WelcomeScreen} from '@screens';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {initialLoginState, loginReducer} from '@reducers';
import {actions} from '@actions';
import AsyncStorage from '@react-native-community/async-storage';
import {AuthContext} from '@components';

// const Stack = createStackNavigator();

const App = () => {
  const [loginState, dispatch] = React.useReducer(
    (prevState, action) => loginReducer(prevState, action),
    initialLoginState,
  );

  const authContext = React.useMemo(() => actions(dispatch), []);

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
        <Navigation loginState={loginState} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
