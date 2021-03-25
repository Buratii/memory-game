import React, { useEffect, useState } from 'react';

import CardBg from '../../assets/cards/cardBg.png';
import { useCard } from '../../hooks/card';

interface Card {
  id: number;
  image: string;
  pair: number;
  flippled: boolean;
  match: boolean;
}

interface CardProps {
  item: Card;
  index: number;
  visibleCard: number[];
  setVisibleCard: (value: number[]) => void;
  checkItems: (firstIndex: number, secondIndex: number) => void;
  matchedCards: number[];
}

import { Container, CardButton, CardImage } from './styles';

const Card = ({ item, index, visibleCard, setVisibleCard, checkItems, matchedCards }: CardProps) => {
  const { setCardAttempts } = useCard();

  const handleClick = () => {
    this['card' + index].flip();

    if (!matchedCards?.includes(index)) {
      switch (visibleCard?.length) {
        case 0:
          setVisibleCard([index]);
          break;

        case 1:
          if (visibleCard[0] !== index) {
            setVisibleCard(visibleCard.concat(index));
            checkItems(visibleCard[0], index);
          }
          setCardAttempts();
          break;
        case 2:
          setVisibleCard([index]);
          break;

        default:
          setVisibleCard([]);
          break;
      }
    }

  }

  return (
    <Container ref={(card) => this['card' + index] = card}>
      <CardButton
        activeOpacity={1}
        onPress={() => {
          handleClick();
        }}>
        <CardImage source={CardBg} />
      </CardButton>
      <CardButton activeOpacity={1}>
        <CardImage source={item.image} />
      </CardButton>
    </Container>
  );
};

export default Card;
