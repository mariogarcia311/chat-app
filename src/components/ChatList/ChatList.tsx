import React from 'react';
import { View } from 'react-native';
import {
  ChatContainer,
  ChatMessageContainer,
  ChatsContainer,
  ChatTextContainer,
  TouchableChatContainer,
} from './ChatList.styled';
import { Text } from '../shared/Text/Text';
import { Avatar } from '../Avatar/Avatar';
import { useRootNavigation } from '@/hooks/useRootNavigation';

export const ChatList = ({ header }: any) => {
  const navigation = useRootNavigation();
  const chatData = Array.from({ length: 100 }, (_, index) => ({
    id: index.toString(),
    content: `Chat item ${index + 1}`,
    name: `User Name ${index + 1}`,
    hour: '8:17 p.m.',
  }));

  const renderItem = ({ item, index }: any) => (
    <TouchableChatContainer
      underlayColor="rgba(255, 255, 255, 0.076)"
      onPress={() => {
        navigation.navigate('Chat', { id: item.id });
      }}>
      <ChatContainer>
        <Avatar
          source={{
            uri:
              index % 2 === 0
                ? 'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=1800&t=st=1721093669~exp=1721094269~hmac=732038f9dbbfb238f5b34eed16e1e541c696f47e7841a57b5fa170a338dbb9e9'
                : 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
          }}
          size={60}
        />
        <ChatTextContainer>
          <ChatMessageContainer>
            <Text size={20} weight={500}>
              {item.name}
            </Text>
            <Text size={15} color="secondary">
              {item.content}
            </Text>
          </ChatMessageContainer>
          <Text size={12} color="tertiary">
            {item.hour}
          </Text>
        </ChatTextContainer>
      </ChatContainer>
    </TouchableChatContainer>
  );

  return (
    <View>
      <ChatsContainer
        data={chatData}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={() => {
          return header;
        }}
      />
    </View>
  );
};
