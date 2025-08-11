import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './bottomNavigation';
import RechargeAndBillsScreen from '../screens/RechargeAndBills';
import MobileRecharge from '../screens/MobileRecharge';
import HistoryRecharge from '../pages/historyRecharge';
import SelectRechargePlan from '../screens/selectRechargePlan';
import SelectFastTag from '../screens/selectFastTag';
import SelectFastTagProvider from '../screens/selectFastTagProvider';
import EnterVehicleNumber from '../screens/enterVehicleNumber';
import SelectDTHProvider from '../screens/selectDTHProvider';
import SelectcableTVoperator from '../screens/SelectcableTVoperator';
import ElectricityBill from '../screens/electricitybill';

export type RootStackParamList = {
  MainTabs: undefined;
  RechargeAndBills: undefined;
  MobileRecharge: undefined;
  TransactionHistory: undefined;
  SelectARechargePlan: undefined;
  FASTagRecharge: undefined;
  SelectFASTagProvider: undefined;
  enterVehicleNumber: undefined;
  SelectDTHProvider: undefined;
  SelectcableTVoperator: undefined;
  ElectricBill: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="MainTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RechargeAndBills"
        component={RechargeAndBillsScreen}
        options={{
          headerShown: true,
          title: 'Recharge & Bills',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />

      <Stack.Screen
        name="MobileRecharge"
        component={MobileRecharge}
        options={{
          headerShown: true,
          title: 'Mobile Recharge',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="TransactionHistory"
        component={HistoryRecharge}
        options={{
          headerShown: true,
          title: 'Transaction History',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="SelectARechargePlan"
        component={SelectRechargePlan}
        options={{
          headerShown: true,
          title: 'Select A Recharge Plan',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="FASTagRecharge"
        component={SelectFastTag}
        options={{
          headerShown: true,
          title: 'FASTag Recharge',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="SelectFASTagProvider"
        component={SelectFastTagProvider}
        options={{
          headerShown: true,
          title: 'Select FASTag Provider',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="enterVehicleNumber"
        component={EnterVehicleNumber}
        options={{
          headerShown: true,
          title: 'Select FASTag Provider',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="SelectDTHProvider"
        component={SelectDTHProvider}
        options={{
          headerShown: true,
          title: 'Select DTH Provider',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="SelectcableTVoperator"
        component={SelectcableTVoperator}
        options={{
          headerShown: true,
          title: 'Select cable TV operator',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
      <Stack.Screen
        name="ElectricBill"
        component={ElectricityBill}
        options={{
          headerShown: true,
          title: 'Electric Bill',
          headerBackVisible: true,
          headerBackTitle: '',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
