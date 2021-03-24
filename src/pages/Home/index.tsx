import React from 'react';

import { Text } from 'react-native';

import LogoImg from '../../assets/Logo.png';

import { Container, Logo, Title, Nickname } from './styles';

function Home() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Title>Insira um apelido</Title>
      <Nickname />
    </Container>
  );
};

export default Home;
