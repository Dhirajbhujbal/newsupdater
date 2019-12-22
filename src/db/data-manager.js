import { HttpApiService } from '../services/http-api.service';

export class AppDataManager {

    constructor() {
        this.appHttpRequestObj = new HttpApiService();
    }

    async getNewsData() {
        try {
            return  await this.appHttpRequestObj.getAllSectionNewsData()
        } catch(err) {
            throw err;
        }
    }

    async updateNewNewsData(requestObj) {
        try {
            return await this.appHttpRequestObj.getMostViewSectionNewsData({
                title: 'foo',
                body: 'bar',
                userId: 1
            });
        } catch(err) {
            throw err;
        }

    }

    

}

export const appDataManagerObj = new AppDataManager();
