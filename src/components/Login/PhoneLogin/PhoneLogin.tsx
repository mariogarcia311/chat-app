import React, { useState } from 'react';
import {
  ButtonLoginPhone,
  ButtonTextLoginPhone,
  InputLoginPhone,
  LoginContainer,
} from './PhoneLogin.styled';
import { Text } from '@/components/shared/Text/Text';
import { useTheme } from 'styled-components/native';
import { loginApi } from '@/api/apiLogin';
import { useLoadingContext } from '@/context/LoadingContext';

interface PhoneLoginProps {
  setUserId: (id: string | null) => void;
}

export const PhoneLogin: React.FC<PhoneLoginProps> = ({ setUserId }) => {
  const [countryCode, setCountryCode] = useState('57');
  const [cellPhone, setCellPhone] = useState('3127324260');
  const { setLoading } = useLoadingContext();
  const theme = useTheme();

  const handleLogin = async () => {
    setLoading(true);
    if (!!countryCode && !!cellPhone) {
      try {
        const resp = await loginApi({ countryCode, cellPhone });
        setUserId(resp.userId);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <LoginContainer>
      <Text size={30}>Login</Text>

      <InputLoginPhone
        placeholder="Código de País"
        value={countryCode}
        onChangeText={setCountryCode}
        keyboardType="phone-pad"
        placeholderTextColor={theme.colors.font.secondary}
      />
      <InputLoginPhone
        placeholder="Número de Teléfono"
        value={cellPhone}
        onChangeText={setCellPhone}
        keyboardType="phone-pad"
        placeholderTextColor={theme.colors.font.secondary}
      />
      <ButtonLoginPhone onPress={handleLogin}>
        <ButtonTextLoginPhone>Iniciar Sesión</ButtonTextLoginPhone>
      </ButtonLoginPhone>
    </LoginContainer>
  );
};
