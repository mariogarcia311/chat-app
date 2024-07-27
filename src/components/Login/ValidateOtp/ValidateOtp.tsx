import React, { useRef, useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  OTPInputBox,
  OTPInputContainer,
  OTPTextInput,
  ValidateOtpContainer,
} from './ValidateOtp.styled';
import { Text } from '@/components/shared/Text/Text';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import { useTheme } from 'styled-components';
import { validateOtpApi } from '@/api/apiLogin';
import { useAuthContext } from '@/context/AuthContext';

type ValidateOtpProps = {
  userId: string | null;
};

export const ValidateOtp: React.FC<ValidateOtpProps> = ({ userId }) => {
  const theme = useTheme();
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const { validateOtp } = useAuthContext();
  const handleChange = (text: string, index: number) => {
    if (isNaN(Number(text))) return;

    let newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);

    if (text && index < 5) {
      inputsRef.current[index + 1]?.focus();
    } else if (index === 5) {
      registerOtp({ code: newOtp.join('') });
    }
  };

  const registerOtp = async ({ code }: { code: string }) => {
    console.log(code, userId);
    try {
      userId && (await validateOtp({ userId, code }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && !otp[index]) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  return (
    <ValidateOtpContainer>
      <MaterialIcons
        name={'notifications-on'}
        size={60}
        color={theme.colors.font.tertiary}
      />
      <View>
        <Text size={20}>Agrega el código que te enviamos</Text>
      </View>
      <OTPInputContainer>
        {otp.map((_, index) => (
          <OTPInputBox key={index}>
            <OTPTextInput
              //@ts-ignore
              ref={(input: TextInput | null) =>
                (inputsRef.current[index] = input)
              }
              keyboardType="number-pad"
              maxLength={1}
              onChangeText={text => handleChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              value={otp[index]}
              selectionColor={theme.colors.font.tertiary}
              cursorColor={theme.colors.font.tertiary}
            />
          </OTPInputBox>
        ))}
      </OTPInputContainer>
    </ValidateOtpContainer>
  );
};
