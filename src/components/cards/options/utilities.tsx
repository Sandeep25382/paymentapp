import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Utilities = () => {
  const navigation = useNavigation<NavigationProp>();
  const services: {
    id: string;
    title: string;
    icon: any;
    screen: keyof RootStackParamList;
  }[] = [
    {
      id: '1',
      title: 'Electric\nBill',
      icon: require('../../../../assets/images/electricbill.png'),
      screen: 'MobileRecharge',
    },
    {
      id: '2',
      title: 'Credit Card\nBill',
      icon: require('../../../../assets/images/creditcardbill.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '3',
      title: 'Loan\nRepayment',
      icon: require('../../../../assets/images/loanrepayment.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '4',
      title: 'Rent',
      icon: require('../../../../assets/images/rent.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '5',
      title: 'Mobile\nPostpaid',
      icon: require('../../../../assets/images/postpaid.png'),
      screen: 'RechargeAndBills',
    },

    {
      id: '6',
      title: 'Book\nCylinder',
      icon: require('../../../../assets/images/cabletv.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '7',
      title: 'Broadband',
      icon: require('../../../../assets/images/broadband.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '8',
      title: 'Prepaid\nMeter',
      icon: require('../../../../assets/images/prepaidmeter.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '9',
      title: 'Piped\nGas',
      icon: require('../../../../assets/images/pipdegas.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: '10',
      title: 'Water',
      icon: require('../../../../assets/images/water.png'),
      screen: 'RechargeAndBills',
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingVertical: 20,
        flexWrap: 'wrap',
        gap: 10,
      }}>
      {services.map(service => (
        <TouchableOpacity
          key={service.id}
          style={{
            width: '22%',
            aspectRatio: 1,
            alignItems: 'center',
            borderRadius: 8,
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

export default Utilities;
