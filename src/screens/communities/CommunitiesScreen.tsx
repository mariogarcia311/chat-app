import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import styled from 'styled-components/native';
import { useRootNavigation } from '@/hooks/useRootNavigation';
import { OverlayContainer } from '@/components/shared/OverlayContainer/OverlayContainer';

type CommunitiesScreenProps = {
  navigation: NavigationProp<any>;
};

const CommunitiesScreen: React.FC<CommunitiesScreenProps> = () => {
  const navigation = useRootNavigation();

  const UserName = styled.Text`
    padding-left: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #010101;
  `;
  return (
    <OverlayContainer style={styles.safeArea}>
      <View>
        <UserName>CommunitiesScreen</UserName>
      </View>
    </OverlayContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default CommunitiesScreen;
