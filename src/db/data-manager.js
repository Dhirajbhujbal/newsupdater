import { HttpApiService } from '../services/http-api.service';

export class AppDataManager {

    constructor() {
        this.appHttpRequestObj = new HttpApiService();
    }

    async getNewsData() {
        return  await this.appHttpRequestObj.getAllSectionNewsData()
    }

    async updateNewNewsData(requestObj) {
        return await this.appHttpRequestObj.getMostViewSectionNewsData({
            title: 'foo',
            body: 'bar',
            userId: 1
        });
    }

    

}

export const appDataManagerObj = new AppDataManager();
