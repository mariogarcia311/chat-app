import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';
import { FloatingActionButtonProps } from './FloatingActionButton';

export const ContainerFloatingActionButton = styled.TouchableHighlight<
  {
    theme: Theme;
  } & FloatingActionButtonProps
>`
  border-radius: ${({ borderRadius = 'medium', theme }) =>
    theme.borderRadius[borderRadius]};
  background-color: ${({ theme }) => theme.colors.btn.primary};
  justify-content: center;
  align-items: center;
  padding: ${({ padding = 5 }) => padding}px;
`;
