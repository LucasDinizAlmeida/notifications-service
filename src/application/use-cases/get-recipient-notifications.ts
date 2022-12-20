import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

interface GetRecipientNotificationsRequest {
  recipientId: string;
}

interface GetRecipientNotificationsResponse {
  notifications: Notification[];
}

export class GetRecipientNotifications {
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute({
    recipientId,
  }: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
    const notifications =
      await this.notificationRepository.findManyByRecipientId(recipientId);

    return {
      notifications,
    };
  }
}
