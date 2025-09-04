import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
// import Svg, {Path} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {customTheme} from '../theme/theme';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      {/* <Svg height="120" width="100%" viewBox="0 0 1440 320">
        <Path
          fill="#4A00E0"
          d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,122.7C672,96,768,96,864,122.7C960,149,1056,203,1152,202.7C1248,203,1344,149,1392,122.7L1440,96V0H0Z"
        />
      </Svg> */}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.profileBox}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>Sandeep Sharma</Text>
          <Text style={styles.email}>sandeep@example.com</Text>
        </View>

        {/* Section: Account */}
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <SettingItem icon="person" label="Edit Profile" />
        <SettingItem icon="credit-card" label="Manage Cards" />
        <SettingItem icon="history" label="History" />

        {/* Section: Preferences */}
        <Text style={styles.sectionTitle}>App Preferences</Text>
        <SettingToggle
          icon="dark-mode"
          label="Dark Mode"
          value={isDarkMode}
          onValueChange={setIsDarkMode}
        />
        <SettingToggle
          icon="notifications"
          label="Push Notifications"
          value={isNotificationsEnabled}
          onValueChange={setIsNotificationsEnabled}
        />

        {/* Section: Security */}
        <Text style={styles.sectionTitle}>Security</Text>
        <SettingItem icon="lock" label="Change PIN" />
        <SettingItem icon="fingerprint" label="Biometric Settings" />

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// ---------------------- Components -------------------------

const SettingItem = ({icon, label}: {icon: string; label: string}) => (
  <TouchableOpacity style={styles.settingItem}>
    <Icon name={icon} size={22} color="#9d3be5" />
    <Text style={styles.settingLabel}>{label}</Text>
    <Icon
      name="chevron-right"
      size={22}
      color="#aaa"
      style={{marginLeft: 'auto'}}
    />
  </TouchableOpacity>
);

const SettingToggle = ({
  icon,
  label,
  value,
  onValueChange,
}: {
  icon: string;
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}) => (
  <View style={styles.settingItem}>
    <Icon name={icon} size={22} color="#9d3be5" />
    <Text style={styles.settingLabel}>{label}</Text>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{false: '#ccc', true: '#8E2DE2'}}
      thumbColor={value ? '#fff' : '#eee'}
      style={{marginLeft: 'auto'}}
    />
  </View>
);

// ---------------------- Styles -------------------------

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f5f3ff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  profileBox: {
    alignItems: 'center',
    marginTop: -60,
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: customTheme.colors.text,

    marginVertical: 10,
    marginLeft: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 2,
    marginBottom: 10,
  },
  settingLabel: {
    fontSize: 15,
    color: '#333',
    marginLeft: 12,
  },
  logoutButton: {
    marginTop: 24,
    marginHorizontal: 16,
    padding: 14,
    backgroundColor: '#FF4B2B',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default SettingsScreen;
