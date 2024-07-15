import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';
import { TextProps } from './Text';

export const StyledText = styled.Text<{ theme: Theme } & TextProps>`
  color: ${({ theme, color }) => theme.colors.font[color ?? 'primary']};
  font-size: ${({ size }) => size}px;
  font-weight: ${({ weight }) => weight || 400};
`;
