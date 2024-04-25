import { combineReducers } from "redux";
import { NotificationType } from "../types/notification";

const initialState: Notification[] = [];

const notificationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return [...state, action.payload];
    case "REMOVE_NOTIFICATION":
      return state.filter(
        (notification: NotificationType) => notification.id !== action.payload
      );
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export default rootReducer;
