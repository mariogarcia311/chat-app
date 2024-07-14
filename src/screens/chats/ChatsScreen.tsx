import { useParams, useRootNavigation } from '@/hooks/useRootNavigation';
import * as React from 'react';
import { SafeAreaView, Button, Text, View } from 'react-native';

const ChatsScreen = () => {
  const params = useParams('Chats');
  const navigation = useRootNavigation();
  return (
    <SafeAreaView>
      <View>
        <View>
          <Button
            title="Go to Jane's profile chat"
            onPress={() => navigation.navigate('Chat', { id: '3334' })}
          />
          <Text
            style={{ color: 'black' }}
            onPress={() => navigation.navigate('Chat', { id: '3334' })}>
            chats
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatsScreen;
