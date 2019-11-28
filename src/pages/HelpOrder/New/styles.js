import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Input = styled.TextInput.attrs({
  paddingTop: 0,
  paddingBottom: 0,
  textAlignVertical: 'top',
})`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

  height: 300px;
  margin-bottom: 10px;
  padding: 15px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 10px;
`;
