import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Time, Info, Status, Question } from './styles';

export default function HelpItem({ data, onPress }) {
  const dateFormatted = useMemo(() => {
    if (!data.answer_at) return null;
    return formatRelative(parseISO(data.answer_at), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.answer_at]);

  const answered = useMemo(() => {
    return !!data.answer_at;
  }, [data.answer_at]);

  return (
    <Container onPress={onPress} enabled={answered}>
      <Info>
        <Status>
          <Icon
            name="check-circle"
            color={answered ? '#42cb59' : '#999'}
            size={20}
          />
          <Title answered={answered}>
            {answered ? 'Respondido' : 'Sem resposta'}
          </Title>
        </Status>

        <Time>{dateFormatted}</Time>
      </Info>

      <Question>{data.question}</Question>
    </Container>
  );
}
