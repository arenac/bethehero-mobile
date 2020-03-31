import React from 'react';
import {Image, StatusBar, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import email from 'react-native-email';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Header,
  HeaderButton,
  Incident,
  IncitendProperty,
  IncidentValue,
  ContactContainer,
  HeroTitle,
  HeroDescription,
  Actions,
  ActionButton,
  ButtonDescription,
} from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const message =
    'Hello, I am contacting as I am interesting to help the case "Help My dog" by donating $120,00';

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    email(['neregato.nilo@gmail.com'], {
      subject: 'Hero of: Help the dog',
      body: message,
    }).catch(console.error);
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=123456789&text=${message}`);
  }

  return (
    <Container statusBarHeight={StatusBar.currentHeight}>
      <Header>
        <Image source={logoImg} />
        <HeaderButton onPress={navigateBack}>
          <Icon name="arrow-left" size={28} color="#e02041" />
        </HeaderButton>
      </Header>

      <Incident>
        <IncitendProperty style={{marginTop: 0}}>ONG:</IncitendProperty>
        <IncidentValue>APAD</IncidentValue>

        <IncitendProperty>CASO:</IncitendProperty>
        <IncidentValue>Help the dog</IncidentValue>

        <IncitendProperty>VALUE:</IncitendProperty>
        <IncidentValue>$120,00</IncidentValue>
      </Incident>
      <ContactContainer>
        <HeroTitle>Save the day!</HeroTitle>
        <HeroTitle>Be the hero of this case.</HeroTitle>
        <HeroDescription>Contact:</HeroDescription>
        <Actions>
          <ActionButton onPress={sendWhatsApp}>
            <ButtonDescription>WhatsApp</ButtonDescription>
          </ActionButton>
          <ActionButton onPress={sendMail}>
            <ButtonDescription>E-mail</ButtonDescription>
          </ActionButton>
        </Actions>
      </ContactContainer>
    </Container>
  );
}
