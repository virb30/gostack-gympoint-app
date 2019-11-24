import styled from 'styled-components/native';

import colors from '~/styles/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 10px;
`;

export const LogoText = styled.Text`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 14px;
  margin-left: 10px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'center',
})`
  height: 18px;
  width: 36px;
`;
