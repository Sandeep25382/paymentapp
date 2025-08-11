// import React, {useState} from 'react';
// import {
//   View,
//   StyleSheet,
//   SafeAreaView,
//   FlatList,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';
// import {Text, Divider, Menu} from 'react-native-paper';
// import TransactionCard from '../pages/transactionCard';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {customTheme} from '../theme/theme';

// type FilterStatus = 'all' | 'success' | 'failed' | 'pending';

// const transactionData = [
//   {
//     id: '1',
//     amount: 999,
//     biller: 'BSNL Broadband',
//     company: 'Internet',
//     method: 'Credit Card',
//     status: 'Paid',
//     icon: 'wifi',
//     time: 'May 14, 2025 • 10:15 AM',
//   },
//   {
//     id: '2',
//     amount: 650,
//     biller: 'Tata Power',
//     company: 'Electricity',
//     method: 'UPI',
//     status: 'Pending',
//     icon: 'flash',
//     time: 'May 13, 2025 • 6:30 PM',
//   },
//   {
//     id: '3',
//     amount: 299,
//     biller: 'Airtel Prepaid',
//     company: 'Mobile Recharge',
//     method: 'Wallet',
//     status: 'Paid',
//     icon: 'cellphone',
//     time: 'May 12, 2025 • 9:45 AM',
//   },
//   {
//     id: '4',
//     amount: 430,
//     biller: 'Indane Gas',
//     company: 'LPG Cylinder',
//     method: 'Debit Card',
//     status: 'Failed',
//     icon: 'gas-cylinder',
//     time: 'May 11, 2025 • 11:20 AM',
//   },
// ];

// const TransactionHistoryScreen = () => {
//   const [search, setSearch] = useState('');
//   const [statusFilter, setStatusFilter] = useState<FilterStatus>('all');
//   const [sortMenuVisible, setSortMenuVisible] = useState(false);
//   const [sortBy, setSortBy] = useState<'latest' | 'amount'>('latest');

//   const filteredData = transactionData
//     .filter(tx =>
//       statusFilter === 'all' ? true : tx.status.toLowerCase() === statusFilter,
//     )
//     .filter(tx => tx.biller.toLowerCase().includes(search.toLowerCase()))
//     .sort((a, b) => {
//       if (sortBy === 'amount') {
//         return b.amount - a.amount;
//       }
//       return 0; // latest by default
//     });

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.header}>Payment History</Text>

//       {/* Summary */}
//       <View style={styles.summaryBox}>
//         <Text style={styles.summaryText}>Total Spent: ₹2,378</Text>
//         <Text style={styles.summarySub}>Top Biller: BSNL Broadband</Text>
//       </View>

//       {/* Search */}
//       <View style={styles.searchBar}>
//         <Icon name="magnify" size={20} color="#888" />
//         <TextInput
//           placeholder="Search by biller..."
//           placeholderTextColor="#aaa"
//           value={search}
//           onChangeText={setSearch}
//           style={styles.searchInput}
//         />
//         {search.length > 0 && (
//           <TouchableOpacity onPress={() => setSearch('')}>
//             <Icon name="close" size={20} color="#888" />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Filters */}
//       <View style={styles.filters}>
//         <TouchableOpacity onPress={() => setStatusFilter('all')}>
//           <Text
//             style={[
//               styles.filterChip,
//               statusFilter === 'all' && styles.activeChip,
//             ]}>
//             All
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setStatusFilter('success')}>
//           <Text
//             style={[
//               styles.filterChip,
//               statusFilter === 'success' && styles.activeChip,
//             ]}>
//             Success
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setStatusFilter('pending')}>
//           <Text
//             style={[
//               styles.filterChip,
//               statusFilter === 'pending' && styles.activeChip,
//             ]}>
//             Pending
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => setStatusFilter('failed')}>
//           <Text
//             style={[
//               styles.filterChip,
//               statusFilter === 'failed' && styles.activeChip,
//             ]}>
//             Failed
//           </Text>
//         </TouchableOpacity>

//         {/* Sort Dropdown */}
//         <Menu
//           visible={sortMenuVisible}
//           onDismiss={() => setSortMenuVisible(false)}
//           anchor={
//             <TouchableOpacity onPress={() => setSortMenuVisible(true)}>
//               <Icon name="sort" size={22} color="#6e11b0" />
//             </TouchableOpacity>
//           }>
//           <Menu.Item
//             onPress={() => setSortBy('latest')}
//             title="Sort by Latest"
//           />
//           <Menu.Item
//             onPress={() => setSortBy('amount')}
//             title="Sort by Amount"
//           />
//         </Menu>
//       </View>

//       {/* List */}
//       <FlatList
//         data={filteredData}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => <TransactionCard {...item} />}
//         ItemSeparatorComponent={() => <Divider />}
//         contentContainerStyle={{paddingBottom: 20}}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: customTheme.colors.background,
//   },
//   header: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: customTheme.colors.text,
//     marginVertical: 16,
//     marginHorizontal: 16,
//   },
//   summaryBox: {
//     backgroundColor: '#f2e8fc',
//     padding: 12,
//     borderRadius: 12,
//     marginHorizontal: 16,
//     marginBottom: 8,
//   },
//   summaryText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#6e11b0',
//   },
//   summarySub: {
//     fontSize: 13,
//     color: '#777',
//     marginTop: 4,
//   },
//   searchBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#eee',
//     marginHorizontal: 16,
//     paddingHorizontal: 12,
//     borderRadius: 12,
//     marginBottom: 8,
//   },
//   searchInput: {
//     flex: 1,
//     paddingVertical: 8,
//     paddingHorizontal: 6,
//     fontSize: 15,
//     color: '#333',
//   },
//   filters: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal: 16,
//     marginBottom: 10,
//     gap: 8,
//   },
//   filterChip: {
//     fontSize: 13,
//     paddingVertical: 4,
//     paddingHorizontal: 10,
//     borderRadius: 12,
//     backgroundColor: '#eee',
//     color: '#444',
//   },
//   activeChip: {
//     backgroundColor: '#6e11b0',
//     color: '#fff',
//   },
// });

// export default TransactionHistoryScreen;

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  SectionList
} from 'react-native';
import { Text,   } from 'react-native-paper';
import { isToday, isYesterday, parse } from 'date-fns';
import TransactionCard from '../pages/transactionCard';
import FancySearchBox from '../components/header/fancySearch';

// Transaction type definition
type Transaction = {
  id: string;
  amount: number;
  biller: string;
  company: string;
  method: string;
  status: 'Paid' | 'Pending' | 'Failed';
  icon: string;
  time: string; // e.g., "May 14, 2025 • 10:15 AM"
};

const rawTransactions: Transaction[] = [
  {
    id: '1',
    amount: 999,
    biller: 'BSNL Broadband',
    company: 'Internet',
    method: 'Credit Card',
    status: 'Paid',
    icon: 'wifi',
    time: 'May 14, 2025 • 10:15 AM',
  },
  {
    id: '2',
    amount: 650,
    biller: 'Tata Power',
    company: 'Electricity',
    method: 'UPI',
    status: 'Pending',
    icon: 'flash',
    time: 'May 13, 2025 • 6:30 PM',
  },
  {
    id: '3',
    amount: 299,
    biller: 'Airtel Prepaid',
    company: 'Mobile Recharge',
    method: 'Wallet',
    status: 'Paid',
    icon: 'cellphone',
    time: 'May 13, 2025 • 9:45 AM',
  },
  {
    id: '4',
    amount: 430,
    biller: 'Indane Gas',
    company: 'LPG Cylinder',
    method: 'Debit Card',
    status: 'Failed',
    icon: 'gas-cylinder',
    time: 'May 12, 2025 • 11:20 AM',
  },
  {
    id: '5',
    amount: 899,
    biller: 'Hathway',
    company: 'Cable TV',
    method: 'Net Banking',
    status: 'Paid',
    icon: 'television',
    time: 'May 10, 2025 • 8:05 PM',
  },
];

const groupTransactionsByDate = (transactions: Transaction[]) => {
  const sections = {
    Today: [] as Transaction[],
    Yesterday: [] as Transaction[],
    Earlier: [] as Transaction[],
  };

  transactions.forEach(tx => {
    const parsedDate = parse(tx.time, 'MMM d, yyyy • hh:mm a', new Date());

    if (isToday(parsedDate)) {
      sections.Today.push(tx);
    } else if (isYesterday(parsedDate)) {
      sections.Yesterday.push(tx);
    } else {
      sections.Earlier.push(tx);
    }
  });

  return Object.entries(sections)
    .filter(([_, txs]) => txs.length > 0)
    .map(([title, data]) => ({title, data}));
};

const TransactionHistoryScreen = () => {
 
  const [search,  ] = useState('');
  
  const sections = groupTransactionsByDate(
    rawTransactions.filter(
      tx =>
        tx.biller.toLowerCase().includes(search.toLowerCase()) ||
        tx.company.toLowerCase().includes(search.toLowerCase()) ||
        tx.method.toLowerCase().includes(search.toLowerCase()),
    ),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Transaction History</Text>

      {/* <View style={styles.searchContainer}>
        <MaterialCommunityIcons name="magnify" size={24} color="#888" />
        <TextInput
          placeholder="Search transactions..."
          style={styles.input}
          value={search}
          onChangeText={setSearch}
        />
        {search.length > 0 ? (
          <TouchableOpacity onPress={() => setSearch('')}>
            <MaterialCommunityIcons name="close" size={24} color="#888" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setMicActive(!micActive)}>
            <MaterialCommunityIcons
              name={micActive ? 'microphone-off' : 'microphone'}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View> */}
      <FancySearchBox
        placeholder="Search for billers, Amount..."
        onSearch={query => console.log('Searching for:', query)}
        onVoiceInput={() => console.log('Voice input triggered')}
      />

      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TransactionCard {...item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f3ff',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 16,
    paddingHorizontal: 20,
    color: '#111',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 10,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
    marginHorizontal: 20,
    color: '#888',
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  separator: {
    height: 10,
  },
});

export default TransactionHistoryScreen;
