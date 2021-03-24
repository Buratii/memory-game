import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface GameProps {
  children: ReactNode;
}

function Game({ children }: GameProps) {
  return (
    <Container>
      <Text>Game</Text>
      {children}
    </Container>
  );
};

export default Game;
