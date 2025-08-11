import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import {customTheme} from '../theme/theme';

const {width} = Dimensions.get('window');
const BUTTON_SIZE = width / 4.5;

const actions = [
  {icon: 'qr-code-scanner', label: 'Scan QR'},
  {icon: 'contact-phone', label: 'Pay to Contacts'},
  {icon: 'phone-in-talk', label: 'Pay to Phone'},
  {icon: 'account-balance', label: 'Bank Transfer'},
  {icon: 'account-circle', label: 'Pay to UPI ID'},
  {icon: 'autorenew', label: 'Self Transfer'},
  {icon: 'payment', label: 'Pay Bills'},
  {icon: 'phone-android', label: 'Mobile Recharge'},
];

const PaymentButtonGrid = () => {
  const handlePress = (action: string) => {
    Alert.alert(`You selected: ${action}`);
  };

  return (
    <View style={styles.container}>
      {Array.from({length: 2}).map((_, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {actions
            .slice(rowIndex * 4, rowIndex * 4 + 4)
            .map((action, index) => (
              <TouchableOpacity
                key={index}
                style={styles.buttonContainer}
                activeOpacity={0.8}
                onPress={() => handlePress(action.label)}>
                <LinearGradient
                  colors={['#6a11cb', '#2575fc']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  style={styles.iconWrapper}>
                  <MaterialIcons name={action.icon} size={28} color="#fff" />
                </LinearGradient>
                <Text style={[styles.label, {color: customTheme.colors.text}]}>
                  {action.label}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  buttonContainer: {
    width: BUTTON_SIZE,
    alignItems: 'center',
  },
  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default PaymentButtonGrid;
