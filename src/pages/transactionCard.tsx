import React from 'react';
import {View, Text, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TransactionCardProps {
  amount: number | string;
  biller: string;
  company: string;
  method: string;
  status: 'Paid' | 'Failed' | 'Pending' | string;
  icon?: string;
  time: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  amount,
  biller,
  company,
  method,
  status,
  icon = 'file-document-outline',
  time,
}) => {
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'Paid':
        return '#4CAF50';
      case 'Failed':
        return '#F44336';
      case 'Pending':
        return '#FF9800';
      default:
        return '#999';
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.leftIcon}>
        <View style={styles.iconBackground}>
          <Icon name={icon} size={24} color="#9d3be5" />
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.biller}>{biller}</Text>
        <Text style={styles.company}>
          {company} • {method}
        </Text>
        <Text style={styles.time}>{time}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.amount}>₹{amount}</Text>
        <Text style={[styles.status, {color: getStatusColor(status)}]}>
          {status}
        </Text>
      </View>
    </View>
  );
};

interface Style {
  card: ViewStyle;
  leftIcon: ViewStyle;
  iconBackground: ViewStyle;
  details: ViewStyle;
  biller: TextStyle;
  company: TextStyle;
  time: TextStyle;
  right: ViewStyle;
  amount: TextStyle;
  status: TextStyle;
}

const styles = StyleSheet.create<Style>({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: 12,
  },
  iconBackground: {
    backgroundColor: '#f1eefc',
    padding: 10,
    borderRadius: 12,
  },
  details: {
    flex: 1,
  },
  biller: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  company: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  time: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 2,
  },
  right: {
    alignItems: 'flex-end',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6e11b0',
  },
  status: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 4,
  },
});

export default TransactionCard;
