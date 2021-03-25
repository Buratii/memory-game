import styled from 'styled-components/native';
import CardFlip from 'react-native-card-flip';

export const Container = styled(CardFlip)`
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 80px;
  height: 100px;
  background-color: #10193a;
  margin: 4px;
  border-radius: 8px;
`;

export const CardButton = styled.TouchableOpacity`
  width: 80px;
  height: 100px;
  background-color: #FE474C;
  border-radius: 8px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;
