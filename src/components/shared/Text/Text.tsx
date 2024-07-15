import React, { ReactNode } from 'react';
import { StyledText } from './Text.styled';

export interface TextProps {
  children: ReactNode;
  color?: 'primary' | 'secondary';
  size: number;
  weight?: number;
}
export const Text: React.FC<TextProps> = ({
  children,
  color = 'primary',
  ...restProps
}: any) => {
  return (
    <StyledText {...restProps} color={color}>
      {children}
    </StyledText>
  );
};
