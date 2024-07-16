import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const CustomHeaderTab = styled.View<{ theme: Theme }>`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.primary};
  padding: ${({ theme }) => theme.padding.container};
`;
