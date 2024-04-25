import { combineReducers } from "redux";
import { NotificationType } from "../types/notification";
import { notificationsMock } from "../utils/mocks/notification";

const initialState: NotificationType[] = notificationsMock;

const notificationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.payload];
    case "REMOVE_NOTIFICATION":
      return state.filter(
        (notification: NotificationType) => notification.id !== action.payload
      );
    case "ADD_NOTIFICATIONS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export default rootReducer;
