import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: ${height * 0.05}px 0;
`;

export const Logo = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.25}px;

  /* margin-top: ${height * 0.05}px; */
`;

export const InputWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const Title = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
  text-transform: uppercase;

  margin-bottom: 8px;
`;

export const Nickname = styled.TextInput`
  width: 94%;
  height: 48px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border-width: 2px;
  border-color: #425d7a;
  padding: 0 16px;
  font-size: 16px;
`;

export const ButtonsWrapper = styled.View`
  width: 100%;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 94%;
  height: 48px;
  justify-content: center;
  align-items: center;

  background-color: #d5c477;
  border-radius: 8px;
  margin: 8px 0;

`;

export const ButtonText = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
  text-transform: uppercase;
`;
