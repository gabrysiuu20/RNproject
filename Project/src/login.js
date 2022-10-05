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


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loading: false,
        }
    }

    loginAttempt = async () => {
        this.setState({ loading: true })
        fetch('http://10.0.2.2:8080/api/auth/signin', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then((res) => {
            if (!res.ok){
                res.json().then((body) =>
                    console.error(body.message));
            }else{
                res.json().then((body) =>
                    console.log("Welcome " + body.forename + "!"));
            }
        });
    }

    toRegisterPage = async () => {
        this.props.navigation.navigate('Register');
    }


    render(){
        return (
            <MainContainer>
                <HomeTitle style = {styles.titleFont}>Login</HomeTitle>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Email' placeholderTextColor='white' onChangeText={email=>this.setState({ email })}/>
                </InputBox>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={password=>this.setState({ password })}/>
                </InputBox>
                <Bttn
                    onPress = {() => this.loginAttempt()}
                >
                    <Text style = {styles.bttnFont}>LOGIN</Text>
                </Bttn>
                <Bttn
                    onPress = {() => this.toRegisterPage()} 
                ><Text style = {styles.bttnFont}>Don't have an account? Sign Up</Text></Bttn>
            </MainContainer>
        )
    }
    
}

