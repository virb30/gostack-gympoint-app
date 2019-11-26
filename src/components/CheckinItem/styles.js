import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 0;
  height: 46px;

  border: 1px solid #ddd;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #444;
`;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
  font-weight: normal;
`;
