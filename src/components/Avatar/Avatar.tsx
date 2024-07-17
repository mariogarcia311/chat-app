import React from 'react';
import { AvatarContainer, AvatarImage, TouchableAvatar } from './Avatar.styled';

interface AvatarProps {
  source: { uri: string };
  onPress?: () => void;
  size: string | number;
}

export const Avatar: React.FC<AvatarProps> = ({ source, onPress, size }) => {
  return (
    <TouchableAvatar onPress={onPress} activeOpacity={0.7}>
      <AvatarContainer size={size}>
        <AvatarImage source={source} />
      </AvatarContainer>
    </TouchableAvatar>
  );
};
