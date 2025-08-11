import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; 
import HomeScreen from '../screens/HomeScreen';
 

import {Image} from 'react-native';
import SearchPageScreen from '../screens/search';
import History from '../screens/history';
import Notification from '../screens/notifications';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#6e11b0',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 100,
          borderTopWidth: 0,
          elevation: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
        },

        tabBarIcon: ({focused}) => {
          let imageSource;

          switch (route.name) {
            case 'Home':
              imageSource = require('../assets/images/home.png');
              break;
            case 'Search':
              imageSource = require('../assets/images/search.png');
              break;
            case 'Notifcation':
              imageSource = require('../assets/images/notification.png');
              break;
            case 'History':
              imageSource = require('../assets/images/history.png');
              break;
          }

          return (
            <Image
              source={imageSource}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#6C54FF' : '#999',
                resizeMode: 'contain',
              }}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchPageScreen} />
      <Tab.Screen name="Notifcation" component={Notification} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
