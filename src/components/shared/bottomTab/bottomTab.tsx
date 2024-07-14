import { SafeAreaView, Text, View } from 'react-native';
import { CustomBottomTab } from './BottomTab.styled';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="rocket" size={30} color="#900" />;
export const BottomTab = () => {
  return (
    <SafeAreaView>
      <CustomBottomTab>
        <Icon name="rocket" size={30} color="#900" />
        <Text>bottomTab</Text>
      </CustomBottomTab>
    </SafeAreaView>
  );
};
