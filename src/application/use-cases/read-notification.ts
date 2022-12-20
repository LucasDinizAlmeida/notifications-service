import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ReadNotificationRequest {
  notificationId: string;
}

export class ReadNotification {
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute({ notificationId }: ReadNotificationRequest): Promise<void> {
    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.read();

    await this.notificationRepository.save(notification);
  }
}
