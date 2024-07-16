import { Theme } from '@/core/types/theme.type';
import React, { ElementRef, useRef, useState } from 'react';
import { View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RoundButton } from '../RoundButton/RoundButton';

const StyledInput = styled.TextInput<{ theme: Theme; ref: any }>`
  background-color: ${({ theme }) => theme.colors.input.bg.primary};
  height: 50px;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 57px;
  color: ${({ theme }) => theme.colors.font.primary};
`;

const IconSearchContiner = styled.View<{ theme: Theme }>`
  position: absolute;
  left: 10px;
  top: 10%;
`;
export const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = { ...useTheme() };
  const inputRef = useRef<any>(null);

  const removeFocus: any = () => {
    if (inputRef.current) {
      inputRef?.current?.blur();
    }
  };
  return (
    <View style={{ position: 'relative' }}>
      <StyledInput
        ref={inputRef}
        placeholder="Buscar..."
        placeholderTextColor={theme.colors.font.secondary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <IconSearchContiner>
        {isFocused ? (
          <RoundButton onPress={removeFocus}>
            <MaterialIcons
              name={'arrow-back'}
              size={30}
              color={theme.colors.font.primary}
            />
          </RoundButton>
        ) : (
          <RoundButton disabled>
            <MaterialIcons
              name={'search'}
              size={30}
              color={theme.colors.font.primary}
            />
          </RoundButton>
        )}
      </IconSearchContiner>
    </View>
  );
};
