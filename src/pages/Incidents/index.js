import React from 'react';
import {Image, StatusBar} from 'react-native';

import {
  Container,
  Header,
  HeaderText,
  TotalText,
  Greetings,
  Description,
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
  return (
    <Container statusBarHeight={StatusBar.currentHeight}>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total of <TotalText>0 cases</TotalText>
        </HeaderText>
      </Header>
      <Greetings>Welcome!</Greetings>
      <Description>Choose a case below and save the day.</Description>
    </Container>
  );
}
