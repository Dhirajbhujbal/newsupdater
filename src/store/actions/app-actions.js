import { appDataManagerObj } from "../../db/data-manager";

export function loadNewsData() {
    return (dispatch) => {
        dispatch(displaySpinner());
        return appDataManagerObj.getNewsData().then( (response) => {
            dispatch(hideSpinner());
            dispatch(getDataFromAPI(response))
        })
    }
}

export function getUpdatedNewsData(requestObj) {
    return (dispatch) => {
        dispatch(displaySpinner());
        return appDataManagerObj.updateNewNewsData(requestObj).then( (response) => {
            dispatch(hideSpinner());
            dispatch(getDataFromAPI(response));
        })
    }
}

export const getDataFromAPI = (data) => {
    return {
        type:'GET_ALL_NEWS_DATA',
        payload: {
            data 
        }
    }
}

export const displaySpinner = () => {
        return { type:'DISPLAY_SPINNER' }
}

export const hideSpinner = () => {
    return { type:'HIDE_SPINNER' }
}