import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import { Feather } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import FriendScreen from './screens/FriendScreen';

const HomeStack = createStackNavigator(
  { HomeScreen, FriendScreen },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'whitesmoke',
      },
    },
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Friends',
        // arrow function violates ESLint display-name rule
        tabBarIcon: function tabBarIcon({ tintColor }) {
          return <Feather name="home" size={24} color={tintColor} />;
        },
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: function tabBarIcon({ tintColor }) {
          return <Feather name="settings" size={24} color={tintColor} />;
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
