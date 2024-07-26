import { BottomTab } from '@/components/shared/BottomTab/BottomTab';
import { HeaderTab } from '@/components/shared/HeaderTab/HeaderTab';
import CallsScreen from '@/screens/calls/CallsScreen';
import ChatsScreen from '@/screens/chats/ChatsScreen';
import CommunitiesScreen from '@/screens/communities/CommunitiesScreen';
import NewsScreen from '@/screens/news/NewsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { RootStackParams } from './IndexNavigation';

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

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
