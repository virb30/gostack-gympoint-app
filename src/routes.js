import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '~/styles/colors';

import SignIn from './pages/SignIn';

import CheckIn from './pages/CheckIn';

import HelpList from './pages/HelpOrder/List';
import Answer from './pages/HelpOrder/Answer';
import New from './pages/HelpOrder/New';

import Header from '~/components/Header';

export default (studentId = null) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            CheckIn: {
              screen: createStackNavigator(
                {
                  CheckIn,
                },
                {
                  defaultNavigationOptions: {
                    headerTitle: <Header />,
                    headerTitleContainerStyle: {
                      justifyContent: 'center',
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Check-ins',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="edit-location" size={20} color={tintColor} />
                ),
              },
            },
            HelpOrder: {
              screen: createStackNavigator(
                {
                  HelpList,
                  New,
                  Answer,
                },
                {
                  defaultNavigationOptions: {
                    headerTitle: <Header />,
                    headerTitleContainerStyle: {
                      justifyContent: 'center',
                    },
                    headerBackTitle: null,
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                }
              ),
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="live-help" size={20} color={tintColor} />
                ),
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: colors.primary,
              inactiveTintColor: colors.secondary,
              labelStyle: {
                fontSize: 14,
              },
              tabStyle: {
                padding: 10,
              },
              style: {
                height: 72,
                backgroundColor: '#FFF',
              },
            },
          }
        ),
      },
      {
        initialRouteName: studentId ? 'App' : 'SignIn',
      }
    )
  );
