import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { ActivityIndicator } from 'react-native';

import api from '~/services/api';
import colors from '~/styles/colors';

import HelpItem from '~/components/HelpItem';
import Background from '~/components/Background';

import { Container, SubmitButton, List } from './styles';

function HelpList({ navigation, isFocused }) {
  const [helpOrders, setHelpOrders] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const student = useSelector(state => state.student);

  const loadHelp = useCallback(async () => {
    setLoading(true);
    const response = await api.get(`students/${student.id}/help-orders`);

    setHelpOrders(response.data.helpOrders);
    setLoading(false);
  }, [student.id]);

  useEffect(() => {
    if (isFocused) {
      setPage(1);
      loadHelp();
    }
  }, [isFocused, loadHelp]);

  async function loadMore(nextPage = 1) {
    setLoading(true);
    const response = await api.get(`students/${student.id}/help-orders`, {
      params: {
        page: nextPage,
      },
    });

    if (response.data.helpOrders.length > 0) {
      setPage(nextPage);
      setHelpOrders(
        nextPage >= 2
          ? [...helpOrders, ...response.data.helpOrders]
          : response.data.helpOrders
      );
    }
    setLoading(false);
  }

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
          onEndReachedThreshold={0.1}
          onEndReached={() => loadMore(page + 1)}
          ListFooterComponent={
            loading && <ActivityIndicator color={colors.primary} />
          }
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(HelpList);
