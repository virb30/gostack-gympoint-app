import React, { useMemo } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import { Container, Card, Title, Content } from './styles';

export default function Answer({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');

  const dateFormatted = useMemo(() => {
    if (!helpOrder.answer_at) return null;
    return formatRelative(parseISO(helpOrder.answer_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [helpOrder]);

  return (
    <Background>
      <Container>
        <Card>
          <Title>PERGUNTA</Title>
          <Content>{helpOrder.question}</Content>
          <Title>RESPOSTA</Title>
          <Content>{helpOrder.answer}</Content>
        </Card>
      </Container>
    </Background>
  );
}

Answer.navigationOptions = ({ navigation }) => ({
  headerTitleContainerStyle: {
    justifyContent: 'center',
    left: -5,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});
