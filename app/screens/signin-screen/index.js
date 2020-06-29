import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import styles from './style';
import {AuthContext} from '@components';

export const SigninScreen = (props) => {
  const [userName, setName] = useState('');
  const [password, setPassword] = useState('');

  const namechange = (name) => {
    if (name != null) {
      setName(name);
    }
    console.log('user name', userName);
  };

  const passwordchange = (password) => {
    if (password != null) {
      setPassword(password);
      console.log('password', password);
    }
  };
  const {signIn} = React.useContext(AuthContext);

  const loginHandle = (userName, password) => {
    console.log('yes im pressed');
    signIn(userName, password);
    console.log('data', userName, password);
  };

  return (
    <View style={styles.container}>
      {/* Header Block */}
      <View style={styles.header}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Book Share</Text>
        </View>
      </View>

      {/* Content Block */}
      <View style={styles.content}>
        <SafeAreaView style={styles.content}>
          {/* <TouchableOpacity
            style={styles.back}
            onPress={() => props.navigation.navigate('landing')}>
            <Image style={styles.image} source={Images.group} />
          </TouchableOpacity> */}
          <ScrollView style={styles.form}>
            <Text style={styles.formText}>Welcome</Text>
            <Text style={styles.formText1}>Back</Text>

            <TextInput
              style={styles.formTextInput}
              placeholder="Name"
              onChangeText={(name) => namechange(name)}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder="Password"
              onChangeText={(password) => passwordchange(password)}
            />
          </ScrollView>
        </SafeAreaView>
      </View>

      {/* Footer Block */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btnsignup}
          onPress={() => {
            loginHandle(userName, password);
          }}>
          <Text style={styles.btnsignupText}> Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
