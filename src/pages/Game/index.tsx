import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import Card from '../../components/Card';
import Modal from '../../components/Modal';
import { useCard } from '../../hooks/card';
import cardsData from '../../utils/cardsData';

interface CardDistributionProps {
  item: Card;
  index: number;
}

import { Container, Content, UserWrapper, UserTextData, CardDistribution } from './styles';

const shuffleCards = cardsData.sort(() => Math.random() - 0.5);

function Game() {
  const { attempts, registerPlayer } = useCard();
  const { params }: any = useRoute();

  const [visibleCard, setVisibleCard] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [openModal, setOpenModal] = useState(false);

  const checkItems = (firstIndex: number, secondIndex: number) => {
    if (
      firstIndex !== secondIndex &&
      shuffleCards[firstIndex].pair === shuffleCards[secondIndex].pair
    ) {
      setMatchedCards([...matchedCards, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        this['card' + firstIndex].flip();
        this['card' + secondIndex].flip();
        setVisibleCard([]);
      }, 600);
    }
  };

  useEffect(() => {
    const Win = async () => {
      if (matchedCards.length > 0 && matchedCards.length === shuffleCards.length) {
        const user = { name: params.nickname, attempts };
        await registerPlayer(user);
        setOpenModal(true);
      }
    }

    Win();
  }, [matchedCards]
  );

  return (
    <Container>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        setMatchedCards={setMatchedCards}
        matchedCards={matchedCards}
      />
      <Content>
        <UserWrapper>
          <UserTextData>{params.nickname}</UserTextData>
          <UserTextData>{attempts}</UserTextData>
        </UserWrapper>
        <CardDistribution
          data={shuffleCards}
          renderItem={({ item, index }: CardDistributionProps) => (
            <Card
              item={item}
              index={index}
              visibleCard={visibleCard}
              setVisibleCard={setVisibleCard}
              checkItems={checkItems}
              matchedCards={matchedCards}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={4}
        />
      </Content>
    </Container>
  );
};

export default Game;
