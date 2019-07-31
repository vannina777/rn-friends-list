import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import PropTypes from 'prop-types';
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

const TabFriendsIcon = ({ tintColor }) => (
  <Feather name="home" size={24} color={tintColor} />
);

const TabSettingsIconIcon = ({ tintColor }) => (
  <Feather name="settings" size={24} color={tintColor} />
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        title: 'Friends',
        tabBarIcon: TabFriendsIcon,
      },
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        tabBarIcon: TabSettingsIconIcon,
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'mediumvioletred',
      style: {
        backgroundColor: 'whitesmoke',
        height: 60,
        paddingTop: 10,
      },
    },
  }
);

export default createAppContainer(TabNavigator);

TabFriendsIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

TabSettingsIconIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
