import { NotificationsRepository } from '@application/repositories/notifications-repository';

interface CountRecipientNotificationRequest {
  recipientId: string;
}

interface CountRecipientNotificationResponse {
  count: number;
}

export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute({
    recipientId,
  }: CountRecipientNotificationRequest): Promise<CountRecipientNotificationResponse> {
    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );

    return {
      count,
    };
  }
}
