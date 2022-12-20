import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface UnreadNotificationRequest {
  notificationId: string;
}

export class UnreadNotification {
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute({ notificationId }: UnreadNotificationRequest): Promise<void> {
    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unread();

    await this.notificationRepository.save(notification);
  }
}
