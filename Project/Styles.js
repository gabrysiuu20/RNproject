import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

export const styles = StyleSheet.create({
    titleFont: {
      color: 'white',
      fontWeight: '600',
    },
    bttnFont: {
      textAlign: 'center',
      fontSize: 20,
      color: 'black',
    },
    mainFont: {
      color: 'white',
    },
  });

export const MainContainer = styled.SafeAreaView`
    background-color: black;
    width: 100%;
    height: 100%;
    padding: 60px;
    gap: 10px 20px;
`;

export const InputBox = styled.View`
    border: 2px solid #BB86FC;
    margin: 10px 0px;
    border-radius: 20px;
`;

export const Bttn = styled.TouchableOpacity`
    border-radius: 20px;
    background: #BB86FC;
    padding: 10px;
    margin: 10px 0px;
`;

export const HomeTitle = styled.Text`
    margin-top: 10px;
    font-size: 40px;
    text-align: center;
`;

export const inputText = styled.TextInput`
    color: white;
`;

