import {View} from 'react-native';
import BackgroundPaper from '../components/paper/backgroundPaper';
import RecentAccountsFastTag from '../components/fasttag/recentAccountsFastTag';
import AddNewFooter from '../components/fasttag/addnewFooter';

const SelectFastTag = () => {
  return (
    <View style={{padding: 10, flex: 1, gap: 14}}>
      <BackgroundPaper
        title="Recent Accounts"
        children={<RecentAccountsFastTag />}
        // onPress={() => {}}
      />
      <AddNewFooter />
    </View>
  );
};

export default SelectFastTag;
