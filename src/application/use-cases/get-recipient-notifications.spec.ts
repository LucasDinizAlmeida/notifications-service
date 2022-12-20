import { makeNotification } from '@test/factories/notification-factory';
import { InMoemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipients Notification', () => {
  it('should be able to get recipient a notification', async () => {
    const notificationsRepository = new InMoemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { notifications } = await getRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    // expect(notifications).toEqual(
    //   expect.arrayContaining([
    //     expect.objectContaining({ props: { recipientId: 'recipient-1' } }),
    //     expect.objectContaining({ props: { recipientId: 'recipient-1' } }),
    //   ]),
    // );
  });
});
