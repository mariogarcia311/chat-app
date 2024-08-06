import { typeORMDriver } from 'react-native-quick-sqlite';
import { DataSource } from 'typeorm';
import { Message } from './Message';
import { Contact } from './Contact';

export const dataSource = new DataSource({
  database: 'quicksqlitetest-typeorm.db',
  entities: [Message, Contact],
  location: '.',
  logging: [],
  synchronize: true,
  type: 'react-native',
  driver: typeORMDriver,
});
