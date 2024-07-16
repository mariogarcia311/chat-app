import { BottomTab } from '@/components/shared/bottomTab/BottomTab';
import { HeaderTab } from '@/components/shared/HeaderTab/HeaderTab';
import CallsScreen from '@/screens/calls/CallsScreen';
import ChatsScreen from '@/screens/chats/ChatsScreen';
import CommunitiesScreen from '@/screens/communities/CommunitiesScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import NewsScreen from '@/screens/news/NewsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();
export type RootStackParams = {
  Home: undefined;
  HomeScreen: undefined;
  Chat: { id: string };
  Chats: undefined;
  Communities: undefined;
  News: undefined;
  Calls: undefined;
};

function HomeScreenRoutes(): React.JSX.Element {
  const [routeName, setRouteName] = useState('Chats');
  return (
    <View style={{ flex: 1 }}>
      <HeaderTab routeName={routeName} />
      <HomeTabNavigation setRouteName={setRouteName} />
      <BottomTab routeName={routeName} />
    </View>
  );
}
function HomeTabNavigation({ setRouteName }: any): React.JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100, height: 0, display: 'none' },
        tabBarStyle: { backgroundColor: 'powderblue' },
      }}
      screenListeners={{
        state: e => {
          const routeName = e.data.state.routes[e.data.state.index].name;
          console.log(routeName);
          setRouteName(routeName);
        },
      }}>
      <Stack.Screen name="Chats" component={ChatsScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Communities" component={CommunitiesScreen} />
      <Stack.Screen name="Calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}

export default HomeScreenRoutes;
