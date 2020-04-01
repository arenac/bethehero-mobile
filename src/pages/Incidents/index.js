import React, {useState, useEffect} from 'react';
import {Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../service/api';

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
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigation.navigate('Detail', {incident});
  }

  async function loadIncidents() {
    if (loading || (total > 0 && incidents.length === total)) {
      return;
    }

    setLoading(true);

    await api
      .get('incidents', {
        params: {
          page,
        },
      })
      .then((response) => {
        setIncidents([...incidents, ...response.data]);
        setTotal(response.headers['x-total-count']);
      })
      .finally(() => {
        setPage(page + 1);
        setLoading(false);
      });
  }

  useEffect(() => {
    loadIncidents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container statusBarHeight={StatusBar.currentHeight}>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total of <TotalText>{total} cases</TotalText>
        </HeaderText>
      </Header>
      <Greetings>Welcome!</Greetings>
      <Description>Choose a case below and save the day.</Description>

      <IncidentList
        data={incidents}
        keyExtractor={(incident) => String(incident.id)}
        showsVerticalScrollIndicator={true}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <Incident>
            <IncitendProperty>ONG:</IncitendProperty>
            <IncidentValue>{incident.name}</IncidentValue>

            <IncitendProperty>CASO:</IncitendProperty>
            <IncidentValue>{incident.title}</IncidentValue>

            <IncitendProperty>VALUE:</IncitendProperty>
            <IncidentValue>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(incident.value)}
            </IncidentValue>

            <Buton
              onPress={() => {
                navigateToDetail(incident);
              }}>
              <ButtonText>Mode details</ButtonText>
              <Icon name="arrow-right" size={16} color="#e02041" />
            </Buton>
          </Incident>
        )}
      />
    </Container>
  );
}
