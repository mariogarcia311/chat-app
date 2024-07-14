import { useParams } from '@/hooks/useRootNavigation';
import * as React from 'react';
import { SafeAreaView, Button, Text, View } from 'react-native';

const ChatScreen = ({ navigation }: any) => {
  const params = useParams('Chat');
  return (
    <SafeAreaView>
      <View>
        <View>
          <Button
            title="Go to Jane's profile chat"
            onPress={() => navigation.navigate('Chats', { name: 'Jane' })}
          />
          <Text style={{ color: 'black' }}>{params?.id}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
