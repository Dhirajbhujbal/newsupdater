
export const AppReducer = (state= { appData: [], displaySpinner: false}, action) => {
    const clonedState = {...state}
    switch(action.type) {
        case 'DISPLAY_SPINNER':
                clonedState.displaySpinner = true;
                return clonedState;

        case 'HIDE_SPINNER': 
                clonedState.displaySpinner = false
                return clonedState;

        case 'GET_ALL_NEWS_DATA':
                clonedState.appData = action.payload.data
                return clonedState;

        default: 
            return state;
    }

}