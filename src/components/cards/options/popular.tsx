import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Popular = () => {
  const navigation = useNavigation<NavigationProp>();
  const services: {
    id: string;
    title: string;
    icon: any;
    screen: keyof RootStackParamList;
  }[] = [
    {
      id: 'mobile',
      title: 'Mobile\nRecharge',
      icon: require('../../../assets/images/mobilerecharge.png'),
      screen: 'MobileRecharge',
    },
    {
      id: 'fastag',
      title: 'FASTag\nRecharge',
      icon: require('../../../assets/images/fasttag.png'),
      screen: 'FASTagRecharge',
    },
    {
      id: 'electric',
      title: 'Electric\nBill',
      icon: require('../../../assets/images/electricbill.png'),
      screen: 'ElectricBill',
    },
    {
      id: 'cable',
      title: 'Cable\nTV',
      icon: require('../../../assets/images/cabletv.png'),
      screen: 'SelectcableTVoperator',
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
      }}>
      {services.map(service => (
        <TouchableOpacity
          key={service.id}
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
          onPress={() => {
            navigation
              .getParent<NativeStackNavigationProp<RootStackParamList>>()
              ?.navigate(service.screen);
          }}>
          <Image source={service.icon} />
          <Text style={{textAlign: 'center'}}>{service.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Popular;
