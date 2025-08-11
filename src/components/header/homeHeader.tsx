import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AvatarComponent from '../avtar/avatar';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import IconButtonComponent from '../button/iconButton';

export default function HomeHeader() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: '#9d3be5',
    width: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* Top Row - Avatar and Icon */}
      <View style={styles.headerRow}>
        <AvatarComponent size={50} />
        <IconButtonComponent onPress={() => {}} size={40} />
      </View>

      {/* Greeting Text */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greet}>Welcome, Sandeep 👋</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  greetingContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greet: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // subGreetRow: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  subGreet: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  iconImage: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});
