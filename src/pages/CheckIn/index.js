import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert, ActivityIndicator } from 'react-native';

import api from '~/services/api';
import colors from '~/styles/colors';

import CheckinItem from '~/components/CheckinItem';
import Background from '~/components/Background';

import { Container, SubmitButton, CheckinList } from './styles';

export default function CheckIn() {
  const [checkins, setCheckins] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const student = useSelector(state => state.student);

  const loadCheckins = useCallback(
    async (p = 1) => {
      setLoading(true);
      const response = await api.get(`students/${student.id}/checkins`, {
        params: {
          page: p,
        },
      });
      setCheckins(response.data);
      setLoading(false);
    },
    [student.id]
  );

  useEffect(() => {
    loadCheckins();
  }, [loadCheckins]);

  async function handleSubmit() {
    try {
      await api.post(`students/${student.id}/checkins`);
      loadCheckins();
    } catch (err) {
      Alert.alert('Erro ao realizar Checkin', err.response.data.error);
    }
  }

  async function loadMore(nextPage = 1) {
    setLoading(true);
    const response = await api.get(`students/${student.id}/checkins`, {
      params: {
        page: nextPage,
      },
    });

    if (response.data.length > 0) {
      setPage(nextPage);
      setCheckins(
        nextPage >= 2 ? [...checkins, ...response.data] : response.data
      );
    }
    setLoading(false);
  }

  return (
    <Background>
      <Container>
        <SubmitButton onPress={handleSubmit}>Novo check-in</SubmitButton>

        <CheckinList
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CheckinItem data={item} />}
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
