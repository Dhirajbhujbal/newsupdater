
export class AppConstant {
    static API_NAMES = {
        NEWS_API : 'https://jsonplaceholder.typicode.com/posts', // http://api.nytimes.com/svc/mostpopular/v2/
        GET_MOST_VIEWD_SECTION_NEWS: 'https://jsonplaceholder.typicode.com/posts' // http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?apikey=sample-key
    };

    static HTTP_REQUEST_TYPES = {
        GET: 'GET',
        POST: 'POST'
    }

    static HTTP_HEADER_STRINGS  = {
        ACCEPT_TYPE: 'application/json',
        CONTENT_TYPE: 'application/json; charset=UTF-8',
        AUTHORIZATION: ''
    }

    static BUTTON_TEXT = {
        OK: 'OK'
    }

    static ERROR_MSG = {
        NO_INTERNET_CONNECTION_AVIALBLE: 'Not internet connection is avialble'
    }
}