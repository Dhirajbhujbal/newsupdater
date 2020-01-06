import { AppConstant } from '../common/app.constant';
import { HttpBase } from './http-base.service';
import { Alert } from 'react-native';

export class HttpApiService extends HttpBase {

    constructor() {
        super();
    }
    
    getAllSectionNewsData() {
        try {
            return this.httpGetApiReuest(AppConstant.API_NAMES.NEWS_API, 'sports');
        }  catch(err) {
            throw err;
        }
    }

    getMostViewSectionNewsData(requesttObj) {
        try {
            return this.httpGetApiReuest(AppConstant.API_NAMES.GET_MOST_VIEWD_SECTION_NEWS, 'mostviewed/all-sections/7');
        } catch(err) {
            return err;
        }
    }

}