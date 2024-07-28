import { ContactList } from '@/components/Contacts/ContactList';
import { Text } from '@/components/shared/Text/Text';
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
}
const ContactsScreen = ({ navigation }: any) => {
  const theme = useTheme();
  const myPhone = '573127324260';
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
      const contacts = await Contacts.getAllWithoutPhotos();
      const contactsReal = contacts.filter(
        _cont => _cont.phoneNumbers.length !== 0,
      );

      const mappedContactsReal = contactsReal.map(_cont => {
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
        };
      });

      setContacts(mappedContactsReal);
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
