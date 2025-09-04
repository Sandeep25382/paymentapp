import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import BackgroundPaper from '../../components/paper/backgroundPaper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Popular from '../../components/cards/options/popular';
import UpcomingBills from '../../components/cards/bills/upcomingBills';
import RecentTransactions from '../../components/cards/transactions/recentTransaction';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationProp, RootStackParamList } from '../../types/navigation';
import { styles } from './home.style';
import GridStarBackground from '../../components/svg/darkbg';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { width } = useWindowDimensions();

  const goToRechargeAndBills = () => {
    navigation
      .getParent<NativeStackNavigationProp<RootStackParamList>>()
      ?.navigate('RechargeAndBills');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <GridStarBackground width={width} height={250} cellSize={50} /> */}

        <View style={{ height: 300, width: '100%', marginBottom: 20 }}>
          <GridStarBackground
            width={width}
            height={300}
            cellSize={80}
            style={{ position: 'absolute', top: 0, left: 0 }} // only inside this container
          />

          {/* Foreground content */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}
          >
            <Text
              style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'left' }}
            >
              <Text style={{ color: 'white' }}>
                Now Recharge Your{'\n'}Mobile With{' '}
              </Text>
              <Text style={{ color: '#3CF9DA' }}>Zero {'\n'}Extra Charges</Text>
            </Text>

            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                marginTop: 15,
                paddingVertical: 10,
                paddingHorizontal: 25,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>
                Recharge Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.scroll}>
          <BackgroundPaper
            title="Popular"
            children={<Popular />}
            onPress={goToRechargeAndBills}
          />
          <BackgroundPaper
            title="Upcoming Bills"
            children={<UpcomingBills />}
          />
          <BackgroundPaper
            title="Recent Transactions"
            children={<RecentTransactions />}
            onPress={() => {}}
          />
          <BackgroundPaper
            title="Recent Transactions"
            children={<RecentTransactions />}
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
