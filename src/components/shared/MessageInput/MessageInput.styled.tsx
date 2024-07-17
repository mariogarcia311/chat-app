import { Theme } from '@/core/types/theme.type';
import { Animated } from 'react-native';
import styled from 'styled-components';

export const SendButtonContainer = styled(Animated.View)<{ theme: Theme }>`
  border-radius: 100px;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.btn.primary};
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const SendIcon = styled(Animated.Text)`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.font.primary};
`;
