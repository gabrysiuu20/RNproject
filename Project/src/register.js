import React, { useState } from 'react'

import {
    styles,
    InputBox,
    MainContainer,
    HomeTitle,
    Bttn,
  } from '../Styles.js';

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


export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            loading: false,
        }
    }

    
    toHomePage = async () => {
        await this.formValidation();
        this.props.navigation.navigate('Home');
    }
    


    formValidation = async () => {
        this.setState({ loading: true })
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
          this.setState({ confirmPasswordErrorMessage: "Confirm Password is required feild"});
        } else if (this.state.confirmPassword.length < 8 ||  this.state.confirmPassword.length > 20) {
          errorFlag = true;
          this.setState({ confirmPasswordErrorMessage: "Password should be min 8 char and max 20 char"});
        }
       
        if (errorFlag) {
            console.log("errorFlag");
            
            /** Call Your API */
        } else {
            this.setState({ loading: false });
        }
    }

     
    render() {
        
        const errorFlag = this.formValidation.errorFlag;
        return (
            <MainContainer>
                <HomeTitle style = {styles.titleFont}>Register</HomeTitle>
                <InputBox>
                    <TextInput style={styles.mainFont} placeholder='Full name' placeholderTextColor='white' onChangeText={fullName=>this.setState({ fullName })}/>
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