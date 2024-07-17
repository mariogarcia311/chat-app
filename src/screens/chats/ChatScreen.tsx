import { Chat } from '@/components/Chat/Chat';
import { useParams } from '@/hooks/useRootNavigation';
import * as React from 'react';
import { SafeAreaView, Button, Text, View } from 'react-native';

const ChatScreen = ({ navigation }: any) => {
  const params = useParams('Chat');
  return <Chat />;
};

export default ChatScreen;
