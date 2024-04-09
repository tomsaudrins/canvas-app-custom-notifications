export interface INotificationProps {
    messageText: string;
    duration?: number;
    type: 'Success' | 'Error' | 'Standard';
  }  