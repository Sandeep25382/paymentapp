import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

// import {useNavigation} from '@react-navigation/native';

import BillsAndRechargeHorizontal from '../pages/BillsAndRechargeHorizontal';
import PeopleSection from '../pages/PeopleSection';
import FancySearchBox from '../components/header/fancySearch';
import UpcomingPaymentsCarousel from '../components/swiper/UpcomingPaymentsCarousel';
import AIChatFAB from '../components/FAB/aiFab';

const SearchScreen = () => {
  //   const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* <SearchHeader /> */}
      <FancySearchBox
        onSearch={query => console.log('Searching for:', query)}
        onVoiceInput={() => console.log('Voice input triggered')}
      />

      <BillsAndRechargeHorizontal />
      <UpcomingPaymentsCarousel />
      <PeopleSection />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Replace this with your list of recent payees or search results */}
      </ScrollView>
      <AIChatFAB />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3ff',
  },
  scrollContent: {
    padding: 16,
  },
});
