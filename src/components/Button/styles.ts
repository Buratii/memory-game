import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

`;

export const CustomButton = styled.TouchableOpacity<{ color: string }>`
  height: 40px;
  margin: 0 8px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 8px;
`;

export const TextButton = styled.Text`
  color: #f5f5f5;
  font-size: 16px;
`;
