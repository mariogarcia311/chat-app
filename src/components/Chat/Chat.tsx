import { Text } from '../shared/Text/Text';
import {
  BackgroundChat,
  ChatContainer,
  ChatInputContainer,
  ChatMessageContainer,
  HeaderChat,
  HeaderChatRow,
  MessageContainer,
  messageHeight,
  MessagesContainer,
  MessageTextContainer,
} from './Chat.styled';
import { RoundButton } from '../shared/RoundButton/RoundButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';
import { Avatar } from '../Avatar/Avatar';
import { useParams } from '@/hooks/useRootNavigation';
import { useRootNavigation } from '../../hooks/useRootNavigation';
import { MessageInput } from '../shared/MessageInput/MessageInput';
import {
  connecToServer,
  disconnecToServer,
  socketSendMessage,
} from '@/api/sockets/chatSocket';
import { useEffect, useRef, useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';
import useMessagesStore from '@/store/useMessagesStore';
import { FlashList } from '@shopify/flash-list';
export const Chat = () => {
  const [inputValue, setInputValue] = useState('');

  const chatListRef = useRef<FlashList<any>>(null);
  const theme = useTheme();
  const navigation = useRootNavigation();
  const params = useParams('Chat');
  const socketSendMessage = useMessagesStore(state => state.sendMessage);
  const refreshMessage = useMessagesStore(state => state.refreshMessage);
  const messages = useMessagesStore(state => state.messages);
  const myPhone = useMessagesStore(state => state.myPhone);
  const setChatId = useMessagesStore(state => state.setChatId);

  const handleSend = () => {
    params?.id &&
      socketSendMessage({ message: inputValue, receiverPhone: params?.id });
  };

  useEffect(() => {
    refreshMessage(params?.id);
    setChatId(params?.id);
    return () => {
      refreshMessage(null);
    };
  }, []);

  const RenderItem = ({ item, index }: any) => {
    console.log(item);
    return (
      <MessageContainer>
        <MessageTextContainer me={item.sender === myPhone}>
          <Text size={15}>{item.message}</Text>
        </MessageTextContainer>
      </MessageContainer>
    );
  };

  return (
    <ChatContainer>
      <ChatMessageContainer>
        <HeaderChat>
          <HeaderChatRow>
            <RoundButton padding={0} onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={'arrow-back'}
                size={30}
                color={theme.colors.font.primary}
              />
            </RoundButton>
            <Avatar
              source={{
                uri:
                  Number(params?.id) % 2 === 0
                    ? 'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=1800&t=st=1721093669~exp=1721094269~hmac=732038f9dbbfb238f5b34eed16e1e541c696f47e7841a57b5fa170a338dbb9e9'
                    : 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
              }}
              size={45}
            />
            <Text size={20} weight={500}>
              {params?.name}
            </Text>
          </HeaderChatRow>
          <HeaderChatRow style={{ gap: 0 }}>
            <RoundButton padding={5} onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name={'video-outline'}
                size={30}
                color={theme.colors.font.primary}
              />
            </RoundButton>
            <RoundButton padding={5} onPress={() => navigation.goBack()}>
              <MaterialCommunityIcons
                name={'phone-outline'}
                size={30}
                color={theme.colors.font.primary}
              />
            </RoundButton>
            <RoundButton padding={5} onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={'more-vert'}
                size={30}
                color={theme.colors.font.primary}
              />
            </RoundButton>
          </HeaderChatRow>
        </HeaderChat>
        <MessagesContainer
          style={{ flex: 1, width: '100%', display: 'flex', height: '100%' }}>
          {!!messages.length ? (
            <FlashList
              data={messages}
              renderItem={RenderItem}
              keyExtractor={(item: any, index) => `${item?.id}}`}
              contentContainerStyle={{ paddingBottom: 20 }}
              removeClippedSubviews={false}
              onEndReachedThreshold={0.1}
              estimatedItemSize={messageHeight}
              ref={chatListRef}
              inverted
            />
          ) : null}
        </MessagesContainer>
        <ChatInputContainer>
          <MessageInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSend={handleSend}
          />
        </ChatInputContainer>
      </ChatMessageContainer>
      <BackgroundChat source={require('@assets/backgroundChat.png')} />
    </ChatContainer>
  );
};
