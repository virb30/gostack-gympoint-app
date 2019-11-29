import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '~/services/api';

import CheckinItem from '~/components/CheckinItem';
import Background from '~/components/Background';

import { Container, SubmitButton, CheckinList } from './styles';

export default function CheckIn() {
  const [checkins, setCheckins] = useState([]);
  const [page, setPage] = useState(1);
  const student = useSelector(state => state.student);

  const loadCheckins = useCallback(
    async (p = 1) => {
      const response = await api.get(`students/${student.id}/checkins`, {
        params: {
          page: p,
        },
      });
      setCheckins(response.data);
    },
    [student.id]
  );

  useEffect(() => {
    loadCheckins();
  }, [loadCheckins]);

  async function handleSubmit() {
    try {
      const { data } = await api.post(`students/${student.id}/checkins`);
      setCheckins([data, ...checkins]);
    } catch (err) {
      Alert.alert('Erro ao realizar Checkin', err.response.data.error);
    }
  }

  async function loadMore() {
    const response = await api.get(`students/${student.id}/checkins`, {
      params: {
        page: page + 1,
      },
    });

    if (response.data.length > 0) {
      setPage(page + 1);
      setCheckins([...checkins, ...response.data]);
    }
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
          onEndReached={loadMore}
        />
      </Container>
    </Background>
  );
}
