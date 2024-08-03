import { Text } from '../shared/Text/Text';
import {
  BackgroundChat,
  ChatContainer,
  ChatInputContainer,
  ChatMessageContainer,
  HeaderChat,
  HeaderChatRow,
  MessagesContainer,
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
import { useEffect, useState } from 'react';
import { useAuthContext } from '@/context/AuthContext';
export const Chat = () => {
  const [inputValue, setInputValue] = useState('');
  const theme = useTheme();
  const navigation = useRootNavigation();
  const params = useParams('Chat');
  const { token } = useAuthContext();
  useEffect(() => {
    token && connecToServer(token);
    return () => {
      disconnecToServer();
    };
  }, []);
  const handleSend = () => {
    params?.id &&
      socketSendMessage({ message: inputValue, receiverPhone: params?.id });
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
        <MessagesContainer style={{ flex: 1 }}></MessagesContainer>
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

const Header = () => {
  return (
    <ChatContainer>
      <Text size={30}>Chat</Text>
      <BackgroundChat />
    </ChatContainer>
  );
};
