import React, { useState } from 'react';
import { StepsLoginContainer } from './StepsLogin.styled';
import { PhoneLogin } from '../PhoneLogin/PhoneLogin';
import { ValidateOtp } from '../ValidateOtp/ValidateOtp';

export const StepsLogin = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const components = [
    <PhoneLogin key={1} setUserId={setUserId} />,
    <ValidateOtp key={2} userId={userId} />,
  ];
  return (
    <StepsLoginContainer>
      {userId ? components[1] : components[0]}
    </StepsLoginContainer>
  );
};
