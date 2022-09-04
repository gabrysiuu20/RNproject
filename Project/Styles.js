import { StyleSheet } from 'react-native';


import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    marginForButton: {
      margin: 10,
    }
  });


export const LogOn = styled.View`
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 300px;
`;

export const LoginBox = styled.View`
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-style: solid;
    height: 55px;
`;

export const PasswordBox = styled.View`
    margin: 10px;
    padding: 10px;
    background-color: white;
    border-style: solid;
    height: 55px;
`;

export const LogOnButton = styled.Button`
    background-color: #123456;
    margin: 50px;
    padding: 10px;
`;

export const RegisterButton = styled.Button`
    background-color: #333;
`;

export const MainContainer = styled.SafeAreaView`
    background-color: black;
    width: 100%;
    height: 100%;
`;

export const HomeTitle = styled.Text`
    color: palevioletred;
    font-size: 30px;
    text-align: center;
`;

