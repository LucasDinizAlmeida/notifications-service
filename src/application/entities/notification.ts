import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this.id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public getId(): string {
    return this.id;
  }

  public setRecipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }
  public getRecipientId(): string {
    return this.props.recipientId;
  }

  public setContent(content: Content) {
    this.props.content = content;
  }
  public getContent(): string {
    return this.props.content.value;
  }

  public setCategory(category: string) {
    this.props.category = category;
  }
  public getCategory(): string {
    return this.props.category;
  }

  public setReadAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }
  public getReadAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public read() {
    this.props.readAt = new Date();
  }
  public unread() {
    this.props.readAt = null;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }
  public getCanceledAt() {
    return this.props.canceledAt;
  }

  public getCreatdAt(): Date {
    return this.props.createdAt;
  }
}
