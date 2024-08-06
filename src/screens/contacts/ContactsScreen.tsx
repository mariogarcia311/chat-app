import { ContactList } from '@/components/Contacts/ContactList';
import { useAuthContext } from '@/context/AuthContext';
import { ContactRepository } from '@/repositories/Contact';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { parsePhoneNumber } from 'libphonenumber-js';
import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  PermissionsAndroid,
  Platform,
  Alert,
  Linking,
} from 'react-native';
import Contacts from 'react-native-contacts';
import { useTheme } from 'styled-components/native';

interface MappedContact {
  name: string;
  phone: string;
  id: string;
}
const ContactsScreen = ({ navigation }: any) => {
  const { user } = useAuthContext();
  const theme = useTheme();
  const myPhone = user?.completePhone;
  const myCountry = useMemo(
    () => parsePhoneNumber(`+${myPhone}`).country,
    [myPhone],
  );
  const [contacts, setContacts] = useState<MappedContact[]>([]);

  useEffect(() => {
    requestContactsPermission();
  }, []);

  const requestContactsPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts Permission',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can access contacts');
          loadContacts();
        } else {
          console.log('Contacts permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      loadContacts();
    }
  };

  const loadContacts = async () => {
    const permission = await Contacts.requestPermission();

    if (permission === 'denied') {
      Alert.alert(
        'Permiso de Contactos Denegado',
        'Esta aplicación necesita acceso a tus contactos. Por favor, habilita el acceso a contactos en la configuración de la aplicación.',
        [
          { text: 'Cancelar', style: 'cancel' },
          {
            text: 'Abrir Configuración',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    } else {
      getContacts();
    }
  };

  const getContacts = async () => {
    try {
      const storageContacts = (await AsyncStorage.getItem('contacts')) ?? '';
      storageContacts && setContacts(JSON.parse(storageContacts));
      const contacts = await Contacts.getAllWithoutPhotos();
      const contactsReal = contacts.filter(
        _cont => _cont.phoneNumbers.length !== 0,
      );

      const mappedContactsReal = contactsReal
        .map(_cont => {
          const phoneNumberRaw = _cont.phoneNumbers[0].number;
          const phoneNumber = phoneNumberRaw.includes('+')
            ? parsePhoneNumber(phoneNumberRaw)
            : parsePhoneNumber(phoneNumberRaw, myCountry);

          const phone = phoneNumber.isValid()
            ? phoneNumber.number
            : phoneNumberRaw;
          return {
            name: _cont.givenName,
            phone,
            id: phone.replace('+', ''),
            isValid: phoneNumber.isValid(),
          };
        })
        .sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
        .filter(({ isValid }) => isValid);

      await ContactRepository.save([
        ...mappedContactsReal,
        { id: myPhone, isValid: true, name: 'me', phone: `+${myPhone}` },
      ]);

      if (storageContacts === JSON.stringify(mappedContactsReal)) {
        return;
      }
      setContacts(mappedContactsReal);
      await AsyncStorage.setItem(
        'contacts',
        JSON.stringify(mappedContactsReal),
      );
    } catch (error) {
      console.warn('Error fetching contacts:', error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.bg.primary }}>
      {!!contacts.length && <ContactList data={contacts} />}
    </View>
  );
};

export default ContactsScreen;
