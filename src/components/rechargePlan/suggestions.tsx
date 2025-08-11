import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SuggestionCard from './suggestionCard';

const Suggestion = () => {
  const {width} = Dimensions.get('window');
  return (
    <LinearGradient
      colors={['#EEEAF6', '#E6F7FF']}
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      style={{width: width, height: 220, borderRadius: 10}}>
      <View style={style.layout}>
        <Text style={{color: '#000000', fontSize: 18, fontWeight: 'semibold'}}>
          Suggested Plans
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 15}}>
          <SuggestionCard
            amount={49}
            type="Data Pack"
            benefits={['1GB', '1 Day (24 Hours)']}
            icon="arrow-right"
            onPressIcon={() => console.log('Icon pressed')}
          />
          <SuggestionCard
            amount={349}
            type="Validity Plan"
            benefits={['Unlimited 5G + 2GB/day ', '28 Days']}
            icon="arrow-right"
            onPressIcon={() => console.log('Icon pressed')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    padding: 15,
    paddingVertical: 20,
  },
});
export default Suggestion;
