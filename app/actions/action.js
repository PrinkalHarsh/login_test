import AsyncStorage from '@react-native-community/async-storage';

export const actions = (dispatch) => ({
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
    dispatch({type: 'LOGOUT', token: null});
  },
});
