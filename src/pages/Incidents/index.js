import React from 'react';
import {Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  HeaderText,
  TotalText,
  Greetings,
  Description,
  IncidentList,
  Incident,
  IncitendProperty,
  IncidentValue,
  Buton,
  ButtonText,
} from './styles';

import logoImg from '../../assets/logo.png';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

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

      <IncidentList
        data={[1, 2, 3]}
        keyExtractor={(incident) => String(incident)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <Incident>
            <IncitendProperty>ONG:</IncitendProperty>
            <IncidentValue>APAD</IncidentValue>

            <IncitendProperty>CASO:</IncitendProperty>
            <IncidentValue>Help the dog</IncidentValue>

            <IncitendProperty>VALUE:</IncitendProperty>
            <IncidentValue>$120,00</IncidentValue>

            <Buton onPress={navigateToDetail}>
              <ButtonText>Mode details</ButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </Buton>
          </Incident>
        )}
      />
    </Container>
  );
}
