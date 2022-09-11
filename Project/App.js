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
  InputBox,
  MainContainer,
  HomeTitle,
  Bttn,
} from './Styles.js';

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

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Login} from './src/login.js';
import {Register} from './src/register.js';


const Main = createNativeStackNavigator();


const App = () => {
  return (
      <NavigationContainer>
        <Main.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Main.Screen
            name = "Home"
            component = {Login}
          />
        
          <Main.Screen
            name = "Register"
            component = {Register}
          />
        </Main.Navigator>
      </NavigationContainer>
    )
}



export default App;
