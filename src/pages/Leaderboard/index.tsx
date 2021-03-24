import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface LeaderboardProps {
  children: ReactNode;
}

function Leaderboard({ children }: LeaderboardProps) {
  return (
    <Container>
      <Text>Leaderboard</Text>
      {children}
    </Container>
  );
};

export default Leaderboard;
