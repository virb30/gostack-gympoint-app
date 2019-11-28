import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '~/services/api';

import CheckinItem from '~/components/CheckinItem';
import Background from '~/components/Background';

import { Container, SubmitButton, CheckinList } from './styles';

export default function CheckIn() {
  const [checkins, setCheckins] = useState([]);
  const student = useSelector(state => state.student);

  const loadCheckins = useCallback(async () => {
    const response = await api.get(`students/${student.id}/checkins`);

    setCheckins(response.data);
  }, [student.id]);

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

  return (
    <Background>
      <Container>
        <SubmitButton onPress={handleSubmit}>Novo check-in</SubmitButton>

        <CheckinList
          data={checkins}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <CheckinItem data={item} />}
        />
      </Container>
    </Background>
  );
}
