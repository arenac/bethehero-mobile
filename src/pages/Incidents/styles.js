import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${(props) => props.statusBarHeight + 20};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #737380;
`;

export const TotalText = styled.Text`
  font-weight: bold;
`;

export const Greetings = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Description = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;
