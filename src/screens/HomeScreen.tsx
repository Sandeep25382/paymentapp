import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundPaper from '../components/paper/backgroundPaper';
import { SafeAreaView } from 'react-native';
import Popular from '../components/cards/options/popular';
import UpcomingBills from '../components/cards/bills/upcomingBills';
import RecentTransactions from '../components/cards/transactions/recentTransaction';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  // const isDarkMode = useColorScheme() === 'dark';

  const goToRechargeAndBills = () => {
    // Go up to stack navigator (parent of tab navigator)
    navigation
      .getParent<NativeStackNavigationProp<RootStackParamList>>()
      ?.navigate('RechargeAndBills');
  };

  return (
    <View style={styles.backgroundStyle}>
      {/* <HomeHeader /> -- */}
      {/* <SwiperHome /> */}
      {/* <UpcomingPaymentsCarousel /> -- */}
      {/* <PaymentButtonGrid /> */}
      {/* <BillAndRechargeScreen />-- */}
      {/* <UtilityBills />-- */}
      {/* <FinanceAndTax />-- */}
      {/* <MoreBills />-- */}
      <SafeAreaView
        style={{
          width: '95%',
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <BackgroundPaper
          children={
            <View>
              <Text
                style={{ fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' }}
              >
                Welcome to the Home Screen
              </Text>
            </View>
          }
        />
        <BackgroundPaper
          title="Popular"
          children={<Popular />}
          onPress={goToRechargeAndBills}
        />
        <BackgroundPaper
          title="Upcoming Bills"
          children={<UpcomingBills />}
          // onPress={() => {}}
        />
        <BackgroundPaper
          title="Recent Transactions"
          children={<RecentTransactions />}
          onPress={() => {}}
        />
      </SafeAreaView>
      {/* <PeopleSection /> */}
      {/* <BusinessesSection /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
});

export default HomeScreen;
