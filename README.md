## Usage

1. Place the component in the screen you would like to call the notification in.
2. Change the onChange event to be the following: UpdateContext({ctxNotificationText: ""})
3. Whenever you would like to call a notification, run the following command: UpdateContext({ctxNotificationText: "This is a succesfully notification.", ctxDuration: 5000, ctxNotificationType: "Success"})

## Notification Types

1. Success - NotificationType.Success
2. Error - NotificationType.Error
3. Standard - N/A type specified

## FAQ
Q: Why is there a value output property
A: To trigger the onChange event. In case it can be done in another way, feel free to make the changes

Q: How is this built?
A: Just a simple implementation from React Hot Toast, feel free to review their documentation for more customizations.

Q: My notification only shows up once
A: Make sure you have updated the onChange event to reset the value of the text property. Component only will display notification when the text changes, not when duration or type does.
