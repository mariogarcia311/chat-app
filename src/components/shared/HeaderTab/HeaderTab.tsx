import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text } from '../Text/Text';
import { useTheme } from 'styled-components/native';
import { useRootNavigation } from '@/hooks/useRootNavigation';
import { CustomHeaderTab } from './HeaderTab.styled';
import { View } from 'react-native';
import { RoundButton } from '@/components/RoundButton/RoundButton';

export const HeaderTab = ({ routeName }: { routeName: string }) => {
  const theme = useTheme();
  const navigation = useRootNavigation();
  const navigateTo = (_route: any) => {
    navigation.navigate(_route);
  };

  const labelTab: any = {
    Chats: 'WhatsApp',
    News: 'Novedades',
    Communities: 'Comunidades',
    Calls: 'Llamadas',
  };
  return (
    <CustomHeaderTab>
      <Text size={20} weight={600}>
        {labelTab?.[routeName]}
      </Text>
      <View>
        <RoundButton>
          <MaterialIcons
            name="camera-outline"
            size={30}
            color={theme.colors.font.primary}
          />
        </RoundButton>
      </View>
    </CustomHeaderTab>
  );
};
