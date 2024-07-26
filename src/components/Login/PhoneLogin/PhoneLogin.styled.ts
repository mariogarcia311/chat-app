import { Theme } from '@/core/types/theme.type';
import styled from 'styled-components/native';

export const LoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const TitleLoginPhone = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const InputLoginPhone = styled.TextInput`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.input.bg.primary};
  height: 50px;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 30px;
  padding-right: 57px;
  color: ${({ theme }) => theme.colors.font.primary};
`;

export const ButtonLoginPhone = styled.TouchableOpacity<{ theme: Theme }>`
  width: 100%;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.btn.primary};
  border-radius: 5px;
  align-items: center;
`;

export const ButtonTextLoginPhone = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
