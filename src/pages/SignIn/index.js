import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { signIn } from '~/store/modules/student/actions';

import Button from '~/components/Button';
import { Container, Logo, TextLogo, Form, FormInput } from './styles';

export default function SignIn() {
  const [student, setStudent] = useState('');
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signIn(student));
  }

  return (
    <Container>
      <Logo>
        <Image source={logo} />
        <TextLogo>GYMPOINT</TextLogo>
      </Logo>

      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          value={student}
          onChangeText={setStudent}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <Button onPress={handleSubmit}>Entrar no sistema</Button>
      </Form>
    </Container>
  );
}
