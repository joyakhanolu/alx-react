import react from React;
import { LOGIN } from "../actions/uiActionTypes";
import { LOGOUT } from "../actions/uiActionTypes";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { HIDE_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { LOGIN_SUCCESS } from "../actions/uiActionTypes";
import { LOGIN_FAILURE } from "../actions/uiActionTypes";

export default function uiReducer () {
    isNotificationDrawerVisible : false;
    isUserLoggedIn: false;
    user: [];
}