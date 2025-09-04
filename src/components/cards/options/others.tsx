import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Others = () => {
  const navigation = useNavigation<NavigationProp>();
  const services: {
    id: string;
    title: string;
    icon: any;
    screen: keyof RootStackParamList;
  }[] = [
    {
      id: '1',
      title: 'LIC\nInsurance',
      icon: require('../../../../assets/images/licinsurance.png'),
      screen: 'MobileRecharge',
    },
    {
      id: '2',
      title: 'Municipal\nTax',
      icon: require('../../../../assets/images/municipaltax.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '3',
      title: 'Apartment',
      icon: require('../../../../assets/images/apartment.png'),
      screen: 'RechargeAndBills',
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
            marginVertical: 10,
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

export default Others;
