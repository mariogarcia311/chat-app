import React, { useMemo } from 'react';
import { View } from 'react-native';
import {
  ContactContainer,
  contactHeight,
  ContactMessageContainer,
  ContactsContainer,
  ContactTextContainer,
  HeaderContacstRow,
  TouchableContactContainer,
  HeaderContacts,
} from './ContactList.styled';
import { Text } from '../shared/Text/Text';
import { Avatar } from '../Avatar/Avatar';
import { useRootNavigation } from '@/hooks/useRootNavigation';
import { RoundButton } from '../shared/RoundButton/RoundButton';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';

export const ContactList = ({ header, data }: any) => {
  const theme = useTheme();
  const navigation = useRootNavigation();

  const renderItem = ({ item, index }: any) => (
    <TouchableContactContainer
      underlayColor="rgba(255, 255, 255, 0.076)"
      onPress={() => {
        navigation.navigate('Chat', { id: item.id });
      }}>
      <ContactContainer>
        <Avatar
          source={{
            uri:
              index % 2 === 0
                ? 'https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=1800&t=st=1721093669~exp=1721094269~hmac=732038f9dbbfb238f5b34eed16e1e541c696f47e7841a57b5fa170a338dbb9e9'
                : 'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg',
          }}
          size={40}
        />
        <ContactTextContainer>
          <ContactMessageContainer>
            <Text size={15} weight={500}>
              {item.name}
            </Text>
            <Text size={12} color="secondary">
              {item.phone}
            </Text>
          </ContactMessageContainer>
        </ContactTextContainer>
      </ContactContainer>
    </TouchableContactContainer>
  );
  const rows = useMemo(() => data.length, [data.lengt]);
  console.log(rows);
  return (
    <View style={{ flex: 1 }}>
      <HeaderContacts>
        <HeaderContacstRow>
          <RoundButton padding={0} onPress={() => navigation.goBack()}>
            <MaterialIcons
              name={'arrow-back'}
              size={30}
              color={theme.colors.font.primary}
            />
          </RoundButton>
          <View>
            <Text size={20} weight={500}>
              contactos
            </Text>
            <Text size={13} weight={500}>
              {data.length} contactos
            </Text>
          </View>
        </HeaderContacstRow>
        <HeaderContacstRow style={{ gap: 0 }}>
          <RoundButton padding={5} onPress={() => navigation.goBack()}>
            <MaterialIcons
              name={'search'}
              size={30}
              color={theme.colors.font.primary}
            />
          </RoundButton>
          <RoundButton padding={5} onPress={() => navigation.goBack()}>
            <MaterialIcons
              name={'more-vert'}
              size={30}
              color={theme.colors.font.primary}
            />
          </RoundButton>
        </HeaderContacstRow>
      </HeaderContacts>
      <ContactsContainer
        data={[...data, ...data, ...data]}
        keyExtractor={(item: any, index) =>
          `${item?.phone}${item?.name}${index}`
        }
        renderItem={renderItem}
        ListHeaderComponent={() => {
          return header;
        }}
        getItemLayout={(data, index) => ({
          length: contactHeight,
          offset: contactHeight * index,
          index,
        })}
        initialNumToRender={Math.floor(rows / 15)}
        maxToRenderPerBatch={Math.floor(rows / 2)}
        updateCellsBatchingPeriod={20}
        windowSize={Math.floor(rows / 2)}
        removeClippedSubviews={false}
        onEndReachedThreshold={0.4}
      />
    </View>
  );
};
