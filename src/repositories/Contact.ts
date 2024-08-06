import { dataSource } from '@/entities';
import { Contact } from '@/entities/Contact';

export const ContactRepository = dataSource.getRepository(Contact);
