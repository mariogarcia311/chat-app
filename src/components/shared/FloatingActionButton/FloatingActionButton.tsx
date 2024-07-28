import React, { ReactNode } from 'react';
import { ContainerFloatingActionButton } from './FloatingActionButton.styled';
import { Theme } from '@/core/types/theme.type';
import { useTheme } from 'styled-components/native';

export interface FloatingActionButtonProps {
  children: ReactNode;
  onPress?: any;
  disabled?: boolean;
  padding?: number;
  borderRadius?: keyof Theme['borderRadius'];
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  children,
  borderRadius,
  padding,
  disabled,

  onPress = () => {},
  ...restProps
}) => {
  const theme: Theme = useTheme();

  return (
    <ContainerFloatingActionButton
      underlayColor={theme.colors.btn.pressedPrimary}
      borderRadius={borderRadius}
      padding={padding}
      disabled={disabled}
      onPress={onPress}
      {...restProps}>
      {children}
    </ContainerFloatingActionButton>
  );
};
