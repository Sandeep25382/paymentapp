import { ScrollView, StyleSheet, View } from 'react-native';
import BackgroundPaper from '../components/paper/backgroundPaper';
import BharatFooter from '../components/footer/bharatFooter';
import Utilities from '../components/cards/options/utilities';
import Others from '../components/cards/options/others';
import Recharge from '../components/cards/options/recharge';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const RechargeAndBills = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: responsiveWidth(3),
      backgroundColor: '#f2f2f2',
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackgroundPaper title="Recharge" children={<Recharge />} />
        <BackgroundPaper title="Utilities" children={<Utilities />} />
        <BackgroundPaper title="Others" children={<Others />} />
      </ScrollView>
      <BharatFooter />
    </View>
  );
};

export default RechargeAndBills;
