
import { AppConstant } from '../common/app.constant';
import newsData from '../resource/news-data.json';
import updateNewsData from '../resource/updated-news-data.json';

// sports.json?api-key=Dh501AiuGbuoqf9uDUhccFPU85g2RNmg

export class HttpBase {

    async httpGetApiReuest (endPoint, queryString) {
        return fetch(`${endPoint}${queryString}.json?${this.getApiKeys()}`, {
            method: AppConstant.HTTP_REQUEST_TYPES.GET,
            headers: new Headers()
        }).then(response => {
            return response.json();
        }).then(json => {
            return json.results;
        }).catch( () => {
            throw AppConstant.ERROR_MSG.NO_INTERNET_CONNECTION_AVIALBLE
        });
    }

    async httpPostApiReuest (endPoint, requestBody) {
        return fetch(`https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=Dh501AiuGbuoqf9uDUhccFPU85g2RNmg`, {
            method: AppConstant.HTTP_REQUEST_TYPES.POST,
            body: this.getPayLoads(requestBody),
            headers: this.getRequestHeader()
          })
          .then(response => {
            return response.json();
          })
          .then(json => {
            return updateNewsData
          }).catch( () => {
            throw AppConstant.ERROR_MSG.NO_INTERNET_CONNECTION_AVIALBLE
        });
    }

    getPayLoads(requestBody) {
        return JSON.stringify(requestBody);
    }

    getRequestHeader() {
        return new Headers({
            Accept: AppConstant.HTTP_HEADER_STRINGS.ACCEPT_TYPE,
            'Content-Type':  AppConstant.HTTP_HEADER_STRINGS.CONTENT_TYPE,
            Authorization: AppConstant.HTTP_HEADER_STRINGS.AUTHORIZATION
        });
    }

    getApiKeys() {
        return 'api-key=Dh501AiuGbuoqf9uDUhccFPU85g2RNmg'
    }

}
