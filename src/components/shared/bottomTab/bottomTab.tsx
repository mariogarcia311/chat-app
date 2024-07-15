import { SafeAreaView, View } from 'react-native';
import { CustomBottomTab, TabContainer } from './BottomTab.styled';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../Text/Text';
import { useTheme } from 'styled-components/native';
import { useRouter } from '@/hooks/useRootNavigation';

const myIcon = <Icon name="rocket" size={30} color="#900" />;
export const BottomTab = () => {
  const theme = useTheme();
  const router = useRouter();
  console.log(router);
  return (
    <SafeAreaView>
      <CustomBottomTab>
        <TabContainer>
          <MaterialIcons
            name={'message-text'}
            size={30}
            color={theme.colors.font.primary}
          />
          <Text size={14} weight={700}>
            Chats
          </Text>
        </TabContainer>
        <TabContainer>
          <MaterialIcons
            name={'circle-double'}
            size={30}
            color={theme.colors.font.primary}
          />
          <Text size={14} weight={700}>
            Novedades
          </Text>
        </TabContainer>
        <TabContainer>
          <MaterialIcons
            name={'account-group-outline'}
            size={30}
            color={theme.colors.font.primary}
          />
          <Text size={14} weight={700}>
            Comunidades
          </Text>
        </TabContainer>
        <TabContainer>
          <MaterialIcons
            name={'phone-outline'}
            size={30}
            color={theme.colors.font.primary}
          />
          <Text size={14} weight={700}>
            Llamadas
          </Text>
        </TabContainer>
      </CustomBottomTab>
    </SafeAreaView>
  );
};
