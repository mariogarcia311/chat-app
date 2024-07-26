import React from 'react';
import { ValidateOtpContainer } from './ValidateOtp.styled';
import { Text } from '@/components/shared/Text/Text';
import { Loading } from '@/components/shared/Loading/Loading';

export const ValidateOtp = () => {
  return (
    <ValidateOtpContainer>
      <Text size={30}>ValidateOtp</Text>
      <Loading />
    </ValidateOtpContainer>
  );
};
