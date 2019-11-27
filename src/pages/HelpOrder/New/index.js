import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function New() {
  return <View />;
}

New.navigationOptions = ({ navigation }) => ({
  headerTitleContainerStyle: {
    justifyContent: 'center',
    left: -5,
  },
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});
