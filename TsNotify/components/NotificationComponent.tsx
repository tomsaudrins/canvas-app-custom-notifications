import { Toaster } from 'react-hot-toast';
import { INotificationProps } from './NotificationProps';
import * as React from 'react';
import toast from 'react-hot-toast';

export class NotificationComponent extends React.Component<INotificationProps> {

  componentDidUpdate(prevProps: INotificationProps) {
    if(this.props.messageText !== prevProps.messageText && this.props.messageText){
      
      const { messageText, duration = 6000, type = 'Standard' } = this.props;
  
      switch (type) {
        case 'Success':
          toast.success(messageText, { duration });
          break;
        case 'Error':
          toast.error(messageText, { duration });
          break;
        default:
          toast(messageText, { duration });
      }
    }
  }

  public render(): React.ReactNode {
    return <Toaster />;
  }
}
