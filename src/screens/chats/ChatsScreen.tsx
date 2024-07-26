import { ChatList } from '@/components/ChatList/ChatList';
import { Search } from '@/components/Search/Search';

import { useParams, useRootNavigation } from '@/hooks/useRootNavigation';
import * as React from 'react';
import { View } from 'react-native';

const ChatsScreen = () => {
  const params = useParams('Chats');
  const navigation = useRootNavigation();
  return (
    <View>
      <ChatList header={<Search />} />
    </View>
  );
};

export default ChatsScreen;
