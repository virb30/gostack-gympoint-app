import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';

import colors from '~/styles/colors';

import SignIn from './pages/SignIn';

import CheckIn from './pages/CheckIn';
import HelpOrder from './pages/HelpOrder';

export default (studentId = null) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            CheckIn,
            HelpOrder,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: colors.primary,
              inactiveTintColor: colors.secondary,
              style: {
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
