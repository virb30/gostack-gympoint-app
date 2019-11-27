import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';

import HelpItem from '~/components/HelpItem';
import Background from '~/components/Background';

import { Container, SubmitButton, List } from './styles';

export default function HelpList({ navigation }) {
  const [helpOrders, setHelpOrders] = useState([]);

  const student = useSelector(state => state.student);

  useEffect(() => {
    async function loadHelp() {
      const response = await api.get(`students/${student.id}/help-orders`);

      setHelpOrders(response.data);
    }

    loadHelp();
  }, [student.id]);

  return (
    <Background>
      <Container>
        <SubmitButton onPress={() => navigation.navigate('New')}>
          Novo pedido de auxilio
        </SubmitButton>

        <List
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <HelpItem
              data={item}
              onPress={() => navigation.navigate('Answer', { helpOrder: item })}
            />
          )}
        />
      </Container>
    </Background>
  );
}
