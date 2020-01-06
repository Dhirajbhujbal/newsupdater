import { HttpBase } from '../src/services/http-base.service';
import { AppConstant } from '../src/common/app.constant';

const globalAny = global;

let mainFetchCallMock;
let apiKey = 'Dh501AiuGbuoqf9uDUhccFPU85g2RNmg'
let  httpBaseObj;
let spy;
beforeAll( () => {
    // appDataManagerObj = new AppDataManager();
    httpBaseObj = new HttpBase()
    mainFetchCallMock = globalAny.fetch;
    globalAny.Headers = jest.fn( () => {})
    globalAny.fetch = jest.fn( () => Promise.resolve({}));

});

test('test fetch with get method', async () => {
    var response = { status: 'OK',
    copyright: 'Copyright (c) 2020 The New York Times Company. All Rights Reserved.',
    section: 'sports',
    last_updated: '2020-01-06T15:37:05-05:00',
    num_results: 18,
    results: [] }

    spy = jest.spyOn(httpBaseObj,'httpGetApiReuest');
    spy.mockImplementation( () => Promise.resolve(response));

    const postApiResponse = await httpBaseObj.httpGetApiReuest(AppConstant.API_NAMES.NEWS_API, 'sports')
    expect(postApiResponse).toBeDefined();
    expect(postApiResponse.status).toBe('OK');
});
