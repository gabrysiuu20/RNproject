import React from 'react';

import {
  styles,
  InputBox,
  MainContainer,
  HomeTitle,
  Bttn,
} from '../Styles';

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


export const Login = ({ navigation }) => {
    return (
        <MainContainer>
            <HomeTitle style = {styles.titleFont}>Login</HomeTitle>
            <InputBox>
                <TextInput style={styles.mainFont} placeholder='Username' placeholderTextColor='white'/>
            </InputBox>
            <InputBox>
                <TextInput style={styles.mainFont} placeholder='Password' placeholderTextColor='white' secureTextEntry={true}/>
            </InputBox>
            <Bttn>
                <Text style = {styles.bttnFont}>LOGIN</Text>
            </Bttn>
            <Bttn
                onPress = {() => navigation.navigate('Register')} 
            ><Text style = {styles.bttnFont}>Don't have an account? Sign Up</Text></Bttn>
        </MainContainer>
    )
}

