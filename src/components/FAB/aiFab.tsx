// import * as React from 'react';
// import {StyleSheet} from 'react-native';
// import {FAB} from 'react-native-paper';

// const AIFab = () => (
//   <FAB icon="plus" style={styles.fab} onPress={() => console.log('Pressed')} />
// );

// const styles = StyleSheet.create({
//   fab: {
//     position: 'absolute',
//     margin: 16,
//     right: 0,
//     bottom: 0,
//   },
// });

// export default AIFab;

// components/AIChatFAB.tsx
import React from 'react';
import {TouchableOpacity, StyleSheet, View,  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface FABProps {
  onPress?: () => void;
}

const AIChatFAB = ({onPress}: FABProps) => {
  return (
    <View style={styles.container} pointerEvents="box-none">
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={onPress || (() => console.log('Open AI Chat'))}>
        <Icon name="robot" size={26} color="#fff" />
        {/* <Image
          source={require('../../../assets/images/bot.png')} // 👈 your image path
          style={styles.image}
          resizeMode="contain"
        /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    zIndex: 100,
    elevation: 10,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // backgroundColor: '#9d3be5',
    backgroundColor: '#3f3f46',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default AIChatFAB;
