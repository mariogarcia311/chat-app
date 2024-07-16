import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const CustomBottomTab = styled.View<{ theme: Theme }>`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-block-end: 2px solid #000;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.divider.primary};
`;

export const TabContainer = styled.View<{ theme: Theme }>`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const IconTabContainer = styled.Pressable<{
  theme: Theme;
  isActive: boolean;
}>`
  ${({ theme, isActive }) =>
    isActive && `background-color: ${theme.colors.tabs.bgSelected};`}
  display: flex;
  align-items: center;
  width: 70%;
  padding: 2px 0px;
  border-radius: 30px;
`;
