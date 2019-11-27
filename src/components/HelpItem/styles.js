import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  padding: 15px;
  flex: 1;

  border: 1px solid #ddd;
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
  flex: 1;
  text-align: right;
  margin-right: 10px;
`;

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  margin-left: 10px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 3,
})`
  margin-top: 20px;
`;
