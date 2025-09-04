import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SelectedRechargeDetail = () => {
  return (
    <View style={style.layout}>
      <View style={{padding: 10}}>
        <Image source={require('../../../assets/images/vi.png')} />
      </View>
      <View style={{display: 'flex', flexDirection: 'column', gap: 4}}>
        <View style={style.upperText}>
          <Text style={{color: '#1A1A1A', fontSize: 16}}>Rahul Basu</Text>
          <Text style={{color: '#1A1A1A', fontSize: 16}}>9987654321</Text>
        </View>
        <View style={style.upperText}>
          <Text style={style.greyText}>JIO</Text>
          <Text style={style.greyText}>Maharashtra & Goa</Text>
          <TouchableOpacity style={{paddingHorizontal: 10}}>
            <Text style={{color: '#6C54FF'}}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  layout: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ffffff',
  },

  upperText: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  greyText: {
    color: '#969696',
  },
});

export default SelectedRechargeDetail;
