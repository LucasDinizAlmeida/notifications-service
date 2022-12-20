import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

export class CancelNotification {
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute({ notificationId }: CancelNotificationRequest): Promise<void> {
    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.cancel();

    await this.notificationRepository.save(notification);
  }
}
