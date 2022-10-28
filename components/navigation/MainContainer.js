import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
//Screens
import HomeScreen from '../navigation/screens/HomeScreen';
import SettingScreen from '../navigation/screens/SettingScreen';
import CartScreen from './screens/CartScreen';
import MenuScreen from './screens/MenuScreen';
import UserScreen from './screens/UserScreen';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'grid' : 'grid-outline';
            } else if (route.name === 'User') {
              return focused ? (
                <FontAwesome name="user-circle" size={size} color={color} />
              ) : (
                <FontAwesome name="user-circle-o" size={size} color={color} />
              );
            }

            // You can return any component that you like here!

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fc2884',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="User" component={UserScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
