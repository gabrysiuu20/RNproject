import React, { useState } from 'react'

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

const User = require("../models/user.model")


export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forename: '',
            surname: '',
            email: '',
            phone: NaN,
            password: '',
            confirmPassword: '',
            loading: false,
        }
    }
    


    formValidation = async () => {
        this.setState({ loading: true })
        this.state.phone = Number(this.state.phone)
        let errorFlag = false;

        // input validation
        if (this.state.password.length == 0) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Password is required field"});
        } else if (this.state.password.length < 8 ||  this.state.password.length > 20) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Password should be min 8 char and max 20 char"});
        } else if (this.state.password !==  this.state.confirmPassword ) {
          errorFlag = true;
          this.setState({ passwordErrorMessage: "Passwoad and confirm password should be same."});
        }
        
        if (this.state.confirmPassword.length == 0) {
          errorFlag = true;
          this.setState({ confirmPasswordErrorMessage: "Confirm Password is required field"});
        } else if (this.state.confirmPassword.length < 8 ||  this.state.confirmPassword.length > 20) {
          errorFlag = true;
          this.setState({ confirmPasswordErrorMessage: "Password should be min 8 char and max 20 char"});
        }

        if (isNaN(this.state.phone)) {
            errorFlag = true;
            this.setState({ phoneErrorMessage: "Phone should have consist of digits"});
        }
       
        if (errorFlag) {
            console.log("errorFlag");
            
            /** Call Your API */
        } else {
            this.setState({ loading: false });
            console.log(`${this.state.forename} ${this.state.surname} ${this.state.email} ${this.state.phone} ${this.state.password} ${this.state.confirmPassword}`);
            this.props.navigation.navigate('Home');
        }
    }

    
            

     
    render() {
        return (
            <MainContainer>
                <HomeTitle style = {styles.titleFont}>Register</HomeTitle>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Forename' placeholderTextColor='white' onChangeText={forename=>this.setState({ forename })}/>
                </InputBox>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Surname' placeholderTextColor='white' onChangeText={surname=>this.setState({ surname })}/>
                </InputBox>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='E-mail' placeholderTextColor='white' onChangeText={email=>this.setState({ email })}/>
                </InputBox>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Phone' placeholderTextColor='white' onChangeText={phone=>this.setState({ phone })}/>
                </InputBox>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={password=>this.setState({ password })}/>
                </InputBox>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Confirm Password' placeholderTextColor='white' secureTextEntry={true} onChangeText={confirmPassword=>this.setState({ confirmPassword })}/>
                </InputBox>
                <Bttn
                    onPress = {() => this.formValidation()}  
                ><Text style = {styles.bttnFont}>Register</Text></Bttn>
            </MainContainer>
        )
    }
   
}