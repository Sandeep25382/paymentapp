import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  QRScanner: undefined;
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

export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Scan: undefined;
  Alerts: undefined;
  History: undefined;

  //

  MainTabs: undefined;
  RechargeAndBills: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
