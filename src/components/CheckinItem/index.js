import React, { useMemo } from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Title, Time } from './styles';

export default function CheckinItem({ data }) {
  const dateFormatted = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), {
      locale: pt,
      addSuffix: true,
    });
  }, [data.createdAt]);

  return (
    <Container>
      <Title>{`Check-in #${data.id}`}</Title>
      <Time>{dateFormatted}</Time>
    </Container>
  );
}
