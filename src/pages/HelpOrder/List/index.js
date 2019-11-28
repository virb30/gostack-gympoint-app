import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';

import api from '~/services/api';

import HelpItem from '~/components/HelpItem';
import Background from '~/components/Background';

import { Container, SubmitButton, List } from './styles';

function HelpList({ navigation, isFocused }) {
  const [helpOrders, setHelpOrders] = useState([]);

  const student = useSelector(state => state.student);

  const loadHelp = useCallback(async () => {
    const response = await api.get(`students/${student.id}/help-orders`);

    setHelpOrders(response.data);
  }, [student.id]);

  useEffect(() => {
    if (isFocused) {
      loadHelp();
    }
  }, [isFocused, loadHelp]);

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

export default withNavigationFocus(HelpList);
