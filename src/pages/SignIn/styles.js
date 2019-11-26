import { Platform } from 'react-native';
import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background: #fff;
`;

export const TextLogo = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.primary};
  margin-top: 10px;
`;

export const FormInput = styled.TextInput`
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
  padding: 10px 20px;
`;

export const Logo = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 30px;
`;
