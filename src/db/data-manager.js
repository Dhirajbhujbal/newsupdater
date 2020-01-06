import { HttpApiService } from '../services/http-api.service';

export class AppDataManager {

    constructor() {
        this.appHttpRequestObj = new HttpApiService();
    }

    async getNewsData() {
        try {
            const data = await this.appHttpRequestObj.getAllSectionNewsData();
            data.sort( (news1, news2) => {
                return new Date(news2.published_date).getTime() - new Date(news1.published_date).getTime()
            })
            return data;
        } catch(err) {
            throw err;
        }
    }

    async updateNewNewsData(requestObj) {
        try {
            return await this.appHttpRequestObj.getMostViewSectionNewsData();
        } catch(err) {
            throw err;
        }

    }

    

}

export const appDataManagerObj = new AppDataManager();
