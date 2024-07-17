import styled from 'styled-components/native';

export const AvatarContainer = styled.View<{ size: string | number }>`
  width: ${({ size }) => size || 50}px;
  height: ${({ size }) => size || 50}px;
  border-radius: 50px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
`;

export const AvatarImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const TouchableAvatar = styled.TouchableOpacity`
  border-radius: 50px;
`;
