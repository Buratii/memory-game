import styled, { css } from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const topScores = {
  1: css`
    background-color: #5cf494;
  `,
  2: css`
    background-color: #82def9;
  `,
  3: css`
    background-color: #c13e3d;
  `,
  // 4: css`
  //   background-color: #474f67;
  // `
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
  /* justify-content: space-between; */
  /* margin: ${height * 0.05}px 0; */
`;

export const Ranking = styled.Image`
  width: 100%;
  height: 36%;
  flex-direction: row;
  justify-content: center;
  background-color: #fff;
`;

export const Title = styled.Text`
  align-self: flex-end;
  font-size: 24px;

`;

export const UserClassification = styled.ScrollView`
  width: 100%;
  margin: 8px 0;
`;

export const PositionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 8px;
`;

export const Position = styled.View<{ place?: number }>`
  width: 64px;
  height: 64px;
  justify-content: center;
  align-items: center;
  ${({ place }) => place < 4 ? topScores[place ?? 4]
    : css` background-color: #474f67; `};

border-radius: 8px;
margin: 4px 0;
`;

export const PositionText = styled.Text`
font-size: 16px;
color: #fff;
`;

export const Nickname = styled.Text`
font-size: 16px;
color: #fff;
`;

export const Score = styled.Text`
font-size: 24px;
color: #fff;
`;
