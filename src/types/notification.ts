export type NotificationType = {
  id?: number;
  title?: string;
  description?: string;
  type?: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
};

export enum NotificationActionTypes {
  ADD_NOTIFICATION = "ADD_NOTIFICATION",
  REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION",
  UPDATE_NOTIFICATION = "UPDATE_NOTIFICATION",
}

export interface Notification {
  id: string;
  type: "success" | "error" | "info";
  message: string;
}
