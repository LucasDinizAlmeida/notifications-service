import { Notification } from '@application/entities/notification';

export class NotificationViewModel {
  static toHTTP(notification: Notification) {
    return {
      id: notification.getId(),
      content: notification.getContent(),
      category: notification.getCategory(),
      recipientId: notification.getRecipientId(),
    };
  }
}
