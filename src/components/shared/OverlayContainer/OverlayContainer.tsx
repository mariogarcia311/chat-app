import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const OverlayContainer = styled.View<{ theme: Theme }>`
  padding: ${({ theme }) => theme.padding.overlayContainer};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  height: 100%;
`;
