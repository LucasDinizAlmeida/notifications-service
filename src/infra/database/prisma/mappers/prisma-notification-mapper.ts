import { Notification } from '@application/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.getId(),
      category: notification.getCategory(),
      content: notification.getContent(),
      recipientId: notification.getRecipientId(),
      readAt: notification.getReadAt(),
      createdAt: notification.getCreatdAt(),
    };
  }
}
