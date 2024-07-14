import { BottomTab } from '@/components/shared/bottomTab/BottomTab';
import ChatsScreen from '@/screens/chats/ChatsScreen';
import CommunitiesScreen from '@/screens/communities/CommunitiesScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import NewsScreen from '@/screens/news/NewsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();
export type RootStackParams = {
  Home: undefined;
  HomeScreen: undefined;
  Chat: { id: string };
  Chats: { userId: string };
  Communities: undefined;
  News: undefined;
};

function HomeScreenRoutes(): React.JSX.Element {
  return (
    <View style={{ flex: 1 }}>
      <HomeTabNavigation />
      <BottomTab />
    </View>
  );
}
function HomeTabNavigation(): React.JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100, height: 0, display: 'none' },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chats" component={ChatsScreen} />
      <Stack.Screen name="Communities" component={CommunitiesScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreenRoutes;
