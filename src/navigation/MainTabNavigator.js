import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SwapsScreen from '../screens/SwapsScreen';
import NewItemScreen from '../screens/NewItemScreen';
import SettingScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Ítems',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
    />
  ),
};

HomeStack.path = '';

const SwapsStack = createStackNavigator(
  {
    Swaps: SwapsScreen,
  },
  config
);

SwapsStack.navigationOptions = {
  tabBarLabel: 'Cambios',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-swap'} />
  ),
};

SwapsStack.path = '';

const NewItemStack = createStackNavigator(
  {
    NewItem: NewItemScreen,
  },
  config
);

NewItemStack.navigationOptions = {
  tabBarLabel: 'Añadir',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-add'} />
  ),
};

NewItemStack.path = '';

const SettingStack = createStackNavigator(
  {
    Setting: SettingScreen,
  },
  config
);

SettingStack.navigationOptions = {
  tabBarLabel: 'Opciones',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={'md-options'} />
  ),
};

SettingStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SwapsStack,
  NewItemStack,
  SettingStack,
});

tabNavigator.path = '';

export default tabNavigator;
