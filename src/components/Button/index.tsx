import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container, CustomButton, TextButton } from './styles';

interface ButtonProps {
  title: string;
  handlePress?: () => void;
  color?: string;
}

const Button = ({ title, handlePress, color }: ButtonProps) => {
  return (
    <Container>
      <CustomButton onPress={handlePress} color={color ?? '#d5c477'}>
        <TextButton>{title}</TextButton>
      </CustomButton>
    </Container>
  );
};

export default Button;
