import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '@/screens/chats/ChatScreen';
import HomeScreenRoutes from './HomeStackNavigation';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { AuthProvider } from '@/context/AuthContext';
import LoginScreen from '@/screens/login/LoginScreen';
import { LoadingProvider } from '@/context/LoadingContext';
import ContactsScreen from '@/screens/contacts/ContactsScreen';

const Stack = createNativeStackNavigator<RootStackParams>();
export type RootStackParams = {
  Home: undefined;
  HomeScreen: undefined;
  Chat: { id: string };
  Chats: undefined;
  Communities: undefined;
  News: undefined;
  Calls: undefined;
  Login: undefined;
  Contacts: undefined;
};

function IndexNavigation(): React.JSX.Element {
  const [currentRoute, setCurrentRoute] = React.useState<string | null>(null);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#101D25' }}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#101D25' }}
        behavior={'padding'}>
        <NavigationContainer>
          <LoadingProvider>
            <AuthProvider currentRoute={currentRoute}>
              <Stack.Navigator
                initialRouteName="HomeScreen"
                screenOptions={{ headerShown: false }}
                screenListeners={{
                  state: e => {
                    const routeName =
                      e.data.state.routes[e.data.state.index].name;
                    setCurrentRoute(routeName);
                  },
                }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreenRoutes} />
                <Stack.Screen name="Contacts" component={ContactsScreen} />
              </Stack.Navigator>
            </AuthProvider>
          </LoadingProvider>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default IndexNavigation;
