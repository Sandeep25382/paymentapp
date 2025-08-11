import { SafeAreaView } from 'react-native-safe-area-context';
import Search from '../components/inputComponents/search';
import { Text } from 'react-native';

const SearchPageScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, padding: 10, gap: 14 }}
      edges={['top', 'left', 'right']}
    >
      <Text
        style={{
          color: '#000000',
          fontSize: 18,
          fontWeight: 'bold',
          padding: 10,
        }}
      >
        Search
      </Text>
      <Search placeholder="Search" />
    </SafeAreaView>
  );
};

export default SearchPageScreen;
