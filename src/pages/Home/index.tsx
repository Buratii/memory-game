import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LogoImg from '../../assets/logo.png';

import {
  Container,
  Logo,
  InputWrapper,
  Title,
  Nickname,
  ButtonsWrapper,
  Button,
  ButtonText
} from './styles';

function Home() {
  const { navigate } = useNavigation();

  const [nickname, setNickname] = useState('');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Logo source={LogoImg} />

      <InputWrapper>
        <Title>Insira um apelido</Title>
        <Nickname
          placeholder="Ex: João"
          onChangeText={setNickname}
        />
      </InputWrapper>

      <ButtonsWrapper>
        <Button
          onPress={() => navigate('Game', { nickname: nickname })}
          disabled={nickname === ''}
        >
          <ButtonText>Jogar</ButtonText>
        </Button>
        <Button onPress={() => navigate('Leaderboard')}>
          <ButtonText>Placar</ButtonText>
        </Button>
      </ButtonsWrapper>
    </Container>
  );
};

export default Home;
