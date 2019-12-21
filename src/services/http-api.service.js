import { AppConstant } from '../common/app.constant';
import { HttpBase } from './http-base.service';
import { Alert } from 'react-native';

export class HttpApiService extends HttpBase {

    constructor() {
        super();
    }
    
    getAllSectionNewsData() {
        return this.httpGetApiReuest(AppConstant.API_NAMES.NEWS_API);
    }

    getMostViewSectionNewsData(requesttObj) {
        return this.httpPostApiReuest(AppConstant.API_NAMES.GET_MOST_VIEWD_SECTION_NEWS, requesttObj);
    }

}