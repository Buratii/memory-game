import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CenteredModal = styled.View`
  width: 100%;
  height: 100%;
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: 'rgba(16, 25, 58, 0.7)';

`;

export const ModalView = styled.View`
  background-color: #10193a;
  align-items: center;
  justify-content: space-evenly;
  width: 90%;
  height: 48%;
  border-radius: 8px;
`;

export const WinnerText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;

`;
