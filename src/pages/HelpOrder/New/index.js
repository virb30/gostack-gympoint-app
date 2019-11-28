import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';

import { Container, Input, SubmitButton } from './styles';

export default function New({ navigation }) {
  const [question, setQuestion] = useState('');

  const student = useSelector(state => state.student);

  async function handleSubmit() {
    await api.post(`students/${student.id}/help-orders`, {
      question,
    });

    navigation.navigate('HelpList');
  }

  return (
    <Background>
      <Container>
        <Input
          multiline
          numberOfLines={10}
          placeholder="Inclua seu pedido de auxílio"
          value={question}
          onChangeText={setQuestion}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Container>
    </Background>
  );
}

New.navigationOptions = ({ navigation }) => ({
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
