import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const contactHeight = 60;

export const ContactContainer = styled.View<{ theme: Theme }>`
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const TouchableContactContainer = styled.TouchableHighlight<{
  theme: Theme;
}>`
  margin: ${({ theme }) => theme.padding.negativeContainer};
  padding: ${({ theme }) => theme.padding.container};
  height: ${contactHeight}px;
`;
export const ContactTextContainer = styled.View<{ theme: Theme }>`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContactMessageContainer = styled.View<{ theme: Theme }>`
  padding-top: 4px;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;

export const ContactsContainer = styled.FlatList`
  padding: ${({ theme }) => theme.padding.overlayContainer};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  flex: 1;
  padding-bottom: '10px';
`;

export const ScrollViewContainer = styled.ScrollView`
  padding: ${({ theme }) => theme.padding.overlayContainer};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const HeaderContacts = styled.View`
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

export const HeaderContacstRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 5px;
`;
