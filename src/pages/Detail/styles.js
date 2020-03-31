import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: ${(props) => props.statusBarHeight + 20};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const Incident = styled.View`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const IncitendProperty = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;
`;

export const IncidentValue = styled.Text`
  margin-top: 8px;
  font-size: 15px;
  color: #737380;
`;

export const ContactContainer = styled.View`
  padding: 24px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const HeroTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #13131a;
  line-height: 30px;
`;

export const HeroDescription = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  background: #e02041;
  border-radius: 8px;
  height: 50px;
  width: 48%;
  justify-content: center;
  align-items: center;
`;

export const ButtonDescription = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 15px;
`;
