import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const ChatContainer = styled.View<{ theme: Theme }>`
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  gap: 20px;
`;
export const TouchableChatContainer = styled.TouchableHighlight<{
  theme: Theme;
}>`
  margin: ${({ theme }) => theme.padding.negativeContainer};
  padding: ${({ theme }) => theme.padding.container};
`;
export const ChatTextContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ChatMessageContainer = styled.View<{ theme: Theme }>`
  padding-top: 4px;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const ChatsContainer = styled.FlatList`
  padding: ${({ theme }) => theme.padding.overlayContainer};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  height: 100%;
`;
