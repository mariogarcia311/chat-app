import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const ChatContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  height: 100%;
  position: relative;
`;

export const ChatMessageContainer = styled.View`
  height: 100%;
  z-index: 2;
`;

export const BackgroundChat = styled.Image`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.06;
  object-fit: cover;
`;

export const HeaderChat = styled.View`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.padding.container};
  border-bottom-width: 0.4px;
  border-bottom-color: ${({ theme }) => theme.colors.divider.primary};
`;
export const HeaderChatRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5px;
`;

export const MessagesContainer = styled.View`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

export const ChatInputContainer = styled.View``;

export const messageHeight = 50;
export const MessageContainer = styled.TouchableOpacity`
  display: flex;
  width: 100%;
  /* height: ${messageHeight}px; */
  margin-bottom: 5px;

  padding-left: 10px;
  padding-right: 10px;
`;

export const MessageTextContainer = styled.View<{ theme: Theme; me: boolean }>`
  display: flex;
  max-width: 70%;
  background-color: ${({ theme, me }) =>
    me ? theme.colors.chat.bg.secondary : theme.colors.chat.bg.primary};
  align-self: ${({ me }) => (me ? 'flex-end' : 'flex-start')};
  padding: 8px;
  border-radius: 10px;
`;
