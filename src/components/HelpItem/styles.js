import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton).attrs(props => ({
  ...props,
}))`
  background: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  padding: 15px;

  border: 1px solid #ddd;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.answered ? '#42cb59' : '#999')};
  margin-left: 5px;
`;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
  font-weight: normal;
  text-align: right;
  margin-right: 10px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  color: #666;
`;
