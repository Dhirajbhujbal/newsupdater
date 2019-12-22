import { APP_ACTIONS } from "../actions/actions.types";

export const AppReducer = (state= { appData: [], displaySpinner: false}, action) => {
    const clonedState = {...state}
    switch(action.type) {
        case APP_ACTIONS.DISPLAY_SPINNER:
                clonedState.displaySpinner = true;
                return clonedState;

        case APP_ACTIONS.HIDE_SPINNER: 
                clonedState.displaySpinner = false
                return clonedState;

        case APP_ACTIONS.GET_ALL_NEWS_DATA:
                clonedState.appData = action.payload.data
                return clonedState;

        default: 
            return state;
    }

}