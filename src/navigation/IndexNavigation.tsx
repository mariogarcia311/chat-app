import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '@/screens/chats/ChatScreen';
import HomeScreenRoutes from './HomeStackNavigation';
import { SafeAreaView, View } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParams>();
export type RootStackParams = {
  Home: undefined;
  HomeScreen: undefined;
  Chat: { id: string };
  Chats: { userId: string };
  Communities: undefined;
  News: undefined;
};

function IndexNavigation(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#101D25' }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Chat" component={ChatScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreenRoutes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default IndexNavigation;
