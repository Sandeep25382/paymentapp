import {TextInput} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const CustomInput = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <SafeAreaView>
        <View style={style.container}>
          <TextInput value="This is a dummy text" style={style.input} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#EDF1F3',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 10,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#ffffff',
  },
});

export default CustomInput;
