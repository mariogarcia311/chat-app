import {
  CustomBottomTab,
  IconTabContainer,
  TabContainer,
} from './BottomTab.styled';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../Text/Text';
import { useTheme } from 'styled-components/native';
import { useRootNavigation } from '@/hooks/useRootNavigation';

export const BottomTab = ({ routeName }: { routeName: string }) => {
  const theme = useTheme();
  const navigation = useRootNavigation();
  const navigateTo = (_route: any) => {
    navigation.navigate(_route);
  };
  return (
    <CustomBottomTab>
      <TabContainer>
        <IconTabContainer
          isActive={routeName === 'Chats'}
          onPress={() => navigateTo('Chats')}>
          <MaterialIcons
            name={'message-text'}
            size={30}
            color={theme.colors.font.primary}
          />
        </IconTabContainer>
        <Text size={14} weight={700}>
          Chats
        </Text>
      </TabContainer>
      <TabContainer>
        <IconTabContainer
          isActive={routeName === 'News'}
          onPress={() => navigateTo('News')}>
          <MaterialIcons
            name={'circle-double'}
            size={30}
            color={theme.colors.font.primary}
          />
        </IconTabContainer>
        <Text size={14} weight={700}>
          Novedades
        </Text>
      </TabContainer>
      <TabContainer>
        <IconTabContainer
          isActive={routeName === 'Communities'}
          onPress={() => navigateTo('Communities')}>
          <MaterialIcons
            name={'account-group-outline'}
            size={30}
            color={theme.colors.font.primary}
          />
        </IconTabContainer>
        <Text size={14} weight={700}>
          Comunidades
        </Text>
      </TabContainer>
      <TabContainer>
        <IconTabContainer
          isActive={routeName === 'Calls'}
          onPress={() => navigateTo('Calls')}>
          <MaterialIcons
            name={'phone-outline'}
            size={30}
            color={theme.colors.font.primary}
          />
        </IconTabContainer>
        <Text size={14} weight={700}>
          Llamadas
        </Text>
      </TabContainer>
    </CustomBottomTab>
  );
};
