import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import color from '~/styles/colors';

export const Container = styled(RectButton)`
  background: ${color.primary};
  height: 46px;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;
