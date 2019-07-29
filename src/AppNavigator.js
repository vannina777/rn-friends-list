import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'expo';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Friends',
        // arrow function violates ESLint display-name rule
        tabBarIcon: function tabBarIcon({ tintColor }) {
          return <Icon.Feather name="home" size={24} color={tintColor} />;
        },
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: function tabBarIcon({ tintColor }) {
          return <Icon.Feather name="settings" size={24} color={tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'mediumvioletred',
      style: {
        backgroundColor: 'whitesmoke',
      },
    },
  }
);

export default createAppContainer(TabNavigator);
