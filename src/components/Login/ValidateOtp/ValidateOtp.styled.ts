import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const ValidateOtpContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  gap: 40px;
`;

export const OTPInputContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const OTPInputBox = styled.View<{ theme: Theme }>`
  border-bottom-width: 2px;
  border-color: ${({ theme }) => theme.colors.input.border.tertiary};
`;

export const OTPTextInput = styled.TextInput<{ theme: Theme }>`
  width: 40px;
  height: 50px;
  text-align: center;
  font-size: 26px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.font.primary};
`;
