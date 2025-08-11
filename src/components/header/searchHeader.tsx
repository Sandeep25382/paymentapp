import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Search from '../inputComponents/search';
import {IconButton, Menu} from 'react-native-paper';

export default function SearchHeader() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.container}>
        <View style={styles.search}>
          <Search placeholder="Search billers, categories.." />
        </View>
        <View style={styles.avatar}>
          <Menu
            visible={menuVisible}
            onDismiss={() => setMenuVisible(false)}
            anchor={
              <IconButton
                icon="dots-vertical"
                size={24}
                onPress={() => setMenuVisible(true)}
              />
            }>
            <Menu.Item onPress={() => {}} title="Option 1" />
            <Menu.Item onPress={() => {}} title="Option 2" />
          </Menu>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  },
  search: {
    width: '88%',
  },
  avatar: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
