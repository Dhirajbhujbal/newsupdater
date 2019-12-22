import { appDataManagerObj } from "../../db/data-manager";
import { APP_ACTIONS } from '../actions/actions.types';
import { Alert } from "react-native";
import { AppConstant } from '../../common/app.constant';

export function loadNewsData() {
    return (dispatch) => {
        dispatch(displaySpinner());
        return appDataManagerObj.getNewsData().then( (response) => {
            dispatch(hideSpinner());
            dispatch(getDataFromAPI(response))
        }).catch( (err) => {
            err = ( typeof err === 'string') ? err : JSON.stringify(err);
            Alert.alert('', err, [ { text: AppConstant.BUTTON_TEXT.OK, onPress:() => dispatch(hideSpinner()) }] )
        })
    }
}

export function getUpdatedNewsData(requestObj) {
    return (dispatch) => {
        dispatch(displaySpinner());
        return appDataManagerObj.updateNewNewsData(requestObj).then( (response) => {
            dispatch(hideSpinner());
            dispatch(getDataFromAPI(response));
        }).catch( (err) => {
            err = ( typeof err === 'string') ? err : JSON.stringify(err);
            Alert.alert('', err, [ { text: AppConstant.BUTTON_TEXT.OK, onPress:() => dispatch(hideSpinner()) }] )
        })
    }
}

export const getDataFromAPI = (data) => {
    return {
        type: APP_ACTIONS.GET_ALL_NEWS_DATA,
        payload: {
            data 
        }
    }
}

export const displaySpinner = () => {
        return { type: APP_ACTIONS.DISPLAY_SPINNER }
}

export const hideSpinner = () => {
    return { type: APP_ACTIONS.HIDE_SPINNER }
}