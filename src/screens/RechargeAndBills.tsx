import { StyleSheet, View } from 'react-native';
import BackgroundPaper from '../components/paper/backgroundPaper';
import { SafeAreaView } from 'react-native-safe-area-context';
import BharatFooter from '../components/footer/bharatFooter';
import Utilities from '../components/cards/options/utilities';
import Others from '../components/cards/options/others';
import Recharge from '../components/cards/options/recharge';

const RechargeAndBills = () => {
  // const features = {
  //   title: 'Recharge',
  //   values: [
  //     {
  //       id: 3,
  //       serviceId: '102',
  //       serviceName: 'Electricity_Bill',
  //       serviceStatus: 'ACTIVE',
  //       createdAt: '2025-07-29 11:00:00.000',
  //       updatedAt: '2025-07-29 11:00:00.000',
  //     },
  //     {
  //       id: 4,
  //       serviceId: '103',
  //       serviceName: 'Water_Bill',
  //       serviceStatus: 'INACTIVE',
  //       createdAt: '2025-07-29 11:15:00.000',
  //       updatedAt: '2025-07-29 11:15:00.000',
  //     },
  //     {
  //       id: 5,
  //       serviceId: '104',
  //       serviceName: 'Gas_Bill',
  //       serviceStatus: 'ACTIVE',
  //       createdAt: '2025-07-29 11:30:00.000',
  //       updatedAt: '2025-07-29 11:30:00.000',
  //     },
  //   ],
  // };

  return (
    <SafeAreaView style={{ paddingHorizontal: 10, flex: 1 }}>
      <View style={styles.backgroundStyle}>
        <BackgroundPaper
          title="Recharge"
          children={<Recharge />}
          //   onPress={goToRechargeAndBills}
        />
        <BackgroundPaper
          title="Utilities"
          children={<Utilities />}
          //   onPress={goToRechargeAndBills}
        />
        <BackgroundPaper
          title="Others"
          children={<Others />}
          //   onPress={goToRechargeAndBills}
        />
      </View>
      <BharatFooter />
      {/* <PeopleSection /> */}
      {/* <BusinessesSection /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    gap: 10,
  },
});

export default RechargeAndBills;
