import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const Recharge = () => {
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
      screen: 'RechargeAndBills',
    },
    {
      id: 'DTH',
      title: 'DTH\nRecharge ',
      icon: require('../../../assets/images/dth.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: 'Metro',
      title: 'Metro',
      icon: require('../../../assets/images/metro.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: 'NCMC',
      title: 'NCMC Recharge',
      icon: require('../../../assets/images/ncmc.png'),
      screen: 'RechargeAndBills',
    },
    {
      id: 'CableTV',
      title: 'Cable TV',
      icon: require('../../../assets/images/cabletv.png'),
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
            // flexDirection: 'column',
            // alignItems: 'center',
            // gap: 2,
            width: '22%', // 22% * 4 + gaps ≈ 100%
            aspectRatio: 1,
            alignItems: 'center',
            // justifyContent: 'center',
            borderRadius: 8,
            marginVertical: 10,
          }}
          onPress={() => {
            console.log(service.screen);
            navigation.navigate(service.screen);
            // navigation
            //   .getParent<NativeStackNavigationProp<RootStackParamList>>()
            //   ?.navigate(service.screen);
          }}>
          <Image source={service.icon} />
          <Text style={{textAlign: 'center'}}>{service.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Recharge;
