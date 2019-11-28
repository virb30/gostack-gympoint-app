import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const Card = styled.View`
  border-radius: 4px;
  background: #fff;
  border: 1px solid #ddd;

  padding: 20px;
`;

export const Title = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 14px;
`;

export const Content = styled.Text`
  font-size: 14px;
  line-height: 26px;
  color: #666;
  margin: 16px 0;
`;

export const Status = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.Text`
  color: #666;
  font-size: 14px;
  font-weight: normal;
  text-align: right;
  margin-right: 10px;
`;
