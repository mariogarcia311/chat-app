import { Theme } from '@/core/types/theme.type';
import React, { useRef, useState } from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { RoundButton } from '@/components/shared/RoundButton/RoundButton';
import { SendButtonContainer, SendIcon } from './MessageInput.styled';

const StyledInput = styled.TextInput<{ theme: Theme; ref: any }>`
  background-color: ${({ theme }) => theme.colors.input.bg.primary};
  height: 50px;
  border-radius: 25px;
  font-size: 20px;
  padding-left: 57px;
  padding-right: 57px;
  color: ${({ theme }) => theme.colors.font.primary};
`;

const EmojiMessageInputContiner = styled.View<{ theme: Theme }>`
  position: absolute;
  left: 10px;
  top: 10%;
`;

const FileMessageInputContainer = styled.View<{ theme: Theme }>`
  position: absolute;
  right: 10px;
  top: 10%;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const MessageInput = () => {
  const [inputValue, setInputValue] = useState('');
  const theme = useTheme();
  const inputRef = useRef<any>(null);
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.8,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handleChangeText = (text: string) => {
    setInputValue(text);
  };

  return (
    <View style={{ position: 'relative', flexDirection: 'row', paddingTop: 6 }}>
      <View style={{ flex: 1 }}>
        <StyledInput
          ref={inputRef}
          placeholder="Mensaje"
          placeholderTextColor={theme.colors.font.secondary}
          onChangeText={handleChangeText}
          value={inputValue}
        />
        <EmojiMessageInputContiner>
          <RoundButton>
            <MaterialIcons
              name={'insert-emoticon'}
              size={30}
              color={theme.colors.font.secondary}
            />
          </RoundButton>
        </EmojiMessageInputContiner>
        <FileMessageInputContainer>
          <RoundButton>
            <MaterialIcons
              name={'attach-file'}
              size={30}
              color={theme.colors.font.secondary}
            />
          </RoundButton>
          {inputValue === '' && (
            <RoundButton>
              <MaterialCommunityIcons
                name={'camera-outline'}
                size={30}
                color={theme.colors.font.secondary}
              />
            </RoundButton>
          )}
        </FileMessageInputContainer>
      </View>
      <View>
        <TouchableWithoutFeedback
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          <SendButtonContainer style={{ transform: [{ scale: scaleAnim }] }}>
            <MaterialCommunityIcons
              name="microphone"
              size={30}
              color={theme.colors.bg.primary}
            />
          </SendButtonContainer>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};
