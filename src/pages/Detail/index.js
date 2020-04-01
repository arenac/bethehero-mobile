import React from 'react';
import {Image, StatusBar, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
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
  const route = useRoute();
  const incident = route.params.incident;
  const message = `Hello, I am contacting as I am interesting to help the case "${
    incident.title
  }" by donating ${Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(incident.value)}`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    email([`${incident.email}`], {
      subject: `Hero of: ${incident.title}`,
      body: message,
    }).catch(console.error);
  }

  function sendWhatsApp() {
    Linking.openURL(
      `whatsapp://send?phone=${incident.whatsapp}&text=${message}`,
    );
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
        <IncidentValue>
          {incident.title} from {incident.city}/{incident.country}
        </IncidentValue>

        <IncitendProperty>CASO:</IncitendProperty>
        <IncidentValue>{incident.description}</IncidentValue>

        <IncitendProperty>VALUE:</IncitendProperty>
        <IncidentValue>
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(incident.value)}
        </IncidentValue>
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
