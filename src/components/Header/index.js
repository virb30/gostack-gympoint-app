import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, LogoText, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <LogoText>GYMPOINT</LogoText>
    </Container>
  );
}
