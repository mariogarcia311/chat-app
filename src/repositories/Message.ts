import { dataSource } from '@/entities';
import { Contact } from '@/entities/Contact';
import { Message } from '@/entities/Message';
import { ContactRepository } from './Contact';

interface SendMessagePayload {
  sender: string;
  chat: string;
  message: string;
}

export const MessageRepository = dataSource.getRepository(Message).extend({
  async sendMessage(payload: SendMessagePayload) {
    const contactRepository = ContactRepository;

    let contact = await contactRepository.findOneBy({
      phone: payload.sender,
    });

    if (!contact) {
      contact = new Contact();
      contact.id = payload.sender;
      contact.isValid = true;
      contact.name = '';
      contact.phone = payload.sender;

      await contactRepository.save(contact);
    }

    const message = new Message();
    message.sender = contact;
    message.chat = payload.chat;
    message.message = payload.message;

    await this.save(message);

    return message;
  },
  async findMessagesByChat(
    chatId: string,
    page: number = 1,
    pageSize: number = 100,
  ) {
    const [messages, total] = await this.createQueryBuilder('message')
      .leftJoinAndSelect('message.sender', 'sender')
      .select([
        'message.id',
        'message.chat',
        'message.message',
        'message.createdAt',
        'sender.id',
      ])
      .where('message.chat = :chatId', { chatId })
      .orderBy('message.createdAt', 'DESC')
      .skip((page - 1) * pageSize)
      .take(pageSize)
      .getManyAndCount();

    return {
      messages: messages.map((_item: Message) => ({
        id: _item.id,
        chat: _item.chat,
        createdAt: _item.createdAt,
        sender: _item.sender.id,
        message: _item.message,
      })),
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
    };
  },
});
