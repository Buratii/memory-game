import React from 'react';
import { View } from 'react-native';

import { useCard } from '../../hooks/card';
import LeaderboardBg from '../../assets/leaderboardBg.png';

import {
  Container,
  Ranking,
  UserClassification,
  PositionWrapper,
  Position,
  PositionText,
  Nickname,
  Score,
} from './styles';

const Leaderboard = () => {
  const { leaderboard } = useCard();
  console.log('FIXMENOW LEADBOARD', leaderboard);
  return (
    <Container>
      <Ranking source={LeaderboardBg} />
      {leaderboard.length > 0 ? (
        <UserClassification showsVerticalScrollIndicator={false}>
          {leaderboard.sort((a, b) => {
            return a.attempts - b.attempts;
          }).map((winner, index) => (
            <PositionWrapper key={index}>
              <Position place={index + 1}>
                <PositionText>{index + 1}</PositionText>
              </Position>
              <Nickname>{winner.name}</Nickname>
              <Score>{winner.attempts}</Score>
            </PositionWrapper>
          ))}
        </UserClassification>
      ) : (
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Nickname>Nenhuma partida cadastrada</Nickname>
        </View>
      )

      }
    </Container>
  );
};

export default Leaderboard;
