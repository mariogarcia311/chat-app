import { Entity, PrimaryColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { Message } from './Message';

@Entity()
export class Contact extends BaseEntity {
  @PrimaryColumn({ type: 'text' })
  id: string;

  @Column({ type: 'boolean' })
  isValid: boolean;

  @Column({ type: 'text', nullable: true })
  name: string | null;

  @Column({ type: 'text' })
  phone: string;

  @OneToMany(() => Message, message => message.sender) // Relación uno a muchos
  messages: Message[];
}
