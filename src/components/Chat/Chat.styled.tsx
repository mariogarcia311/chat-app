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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatInputContainer = styled.View``;
