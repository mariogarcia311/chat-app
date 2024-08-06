import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { dataSource } from '.';
import { Contact } from './Contact';

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Contact, contact => contact.messages, { nullable: true }) // Relación muchos a uno
  sender: Contact;

  @Column('text')
  chat: string;

  @Column('text', { nullable: true })
  image: string | null;

  @Column('text')
  message: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
