import { NotificationType } from "../types/notification";

export const addNotification = (notification: NotificationType) => ({
  type: "ADD_NOTIFICATION",
  payload: notification,
});

export const removeNotification = (id: string) => ({
  type: "REMOVE_NOTIFICATION",
  payload: id,
});
