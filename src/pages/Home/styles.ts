import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width, height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const Logo = styled.Image`
  width: ${width * 0.8}px;
  height: ${height * 0.25}px;

  margin-top: 40px;
`;

export const Title = styled.Text`
  color: #f5f5f5;
`;

export const Nickname = styled.TextInput`
  width: 94%;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border-width: 2px;
  border-color: #425d7a;
`;
