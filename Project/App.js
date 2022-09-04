/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  styles,
  LogOn,
  LoginBox,
  PasswordBox,
  LogOnButton,
  RegisterButton,
  MainContainer,
  HomeTitle,
} from './Styles';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';


const App = () => {

  return (
    <MainContainer>
      <LogOn>
        <HomeTitle>SIMPLE LOGIN PANEL</HomeTitle>
        <LoginBox>
          <TextInput placeholder='Login'/>
        </LoginBox>
        <PasswordBox>
          <TextInput placeholder='Password'/>
        </PasswordBox>
        <View style = {styles.marginForButton}>
          <LogOnButton 
            title = "Log in"
          />
        </View>
        <Text style = {{color: 'palevioletred', textAlign: 'center'}}>Don't have an account?</Text>
        <View style = {styles.marginForButton}>
          <RegisterButton 
            title = "Register right now" 
          />
        </View>
      </LogOn>
    </MainContainer>
  );
};



export default App;
