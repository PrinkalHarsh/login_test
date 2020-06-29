import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '@components';

export const WelcomeScreen = () => {
  const {logOut} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>welcome Screen</Text>
      <Button
        title="log out"
        onPress={() => {
          logOut();
        }}
      />
    </View>
  );
};
