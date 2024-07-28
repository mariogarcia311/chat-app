import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { FloatingActionButton } from '@/components/shared/FloatingActionButton/FloatingActionButton';

import { HomeFABContainer } from './HomeFAB.styled';
import { Text } from 'react-native';
import { Theme } from '@/core/types/theme.type';
import { useTheme } from 'styled-components/native';
import { useRootNavigation } from '@/hooks/useRootNavigation';

export interface HomeFABProps {
  onPress?: any;
  disabled?: boolean;
  padding?: number;
}

export const HomeFAB: React.FC = () => {
  const theme: Theme = useTheme();
  const navigate = useRootNavigation();
  return (
    <HomeFABContainer>
      <FloatingActionButton
        padding={15}
        onPress={() => navigate.navigate('Contacts')}>
        <MaterialCommunityIcons
          name={'message-plus'}
          size={25}
          color={theme.colors.btnFont.primary}
        />
      </FloatingActionButton>
    </HomeFABContainer>
  );
};
