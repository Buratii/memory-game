import { useNavigation } from '@react-navigation/core';
import React from 'react';

import { Text, Modal as ContainerModal } from 'react-native';
import { useCard } from '../../hooks/card';
import Button from '../Button';

import {
  Container,
  CenteredModal,
  ModalView,
  ButtonsWrapper,
  WinnerText
} from './styles';

interface ModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  matchedCards: number[];
  setMatchedCards: (value: number[]) => void;
}

const Modal = ({ openModal, setOpenModal, matchedCards, setMatchedCards }: ModalProps) => {
  const { resetCardAttempts } = useCard();
  const { goBack, } = useNavigation();

  const home = () => {
    resetCardAttempts();
    setOpenModal(false);
    goBack();
  }

  const tryAgain = () => {
    resetCardAttempts();
    matchedCards.map(data => {
      this['card' + data].flip();
    })
    setMatchedCards([]);
  }

  return (
    <Container>
      <ContainerModal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => {
          setOpenModal(!openModal);
        }}
      >
        <CenteredModal>
          <ModalView>
            <WinnerText>Você Ganhou!</WinnerText>
            <ButtonsWrapper>
              <Button title='Jogar novamente' handlePress={tryAgain} />
              <Button title='Sair' color='#862139' handlePress={home} />
            </ButtonsWrapper>
          </ModalView>
        </CenteredModal>
      </ContainerModal>
    </Container>
  );
};

export default Modal;
