import axios, { AxiosInstance, AxiosResponse } from 'axios';
import MockAdapter from "axios-mock-adapter";
import camelCaseKeys from 'camelcase-keys';
import { mockUserListUrl } from 'Common/url'
import userListResponceData from 'Tests/Data/SampleUsers.json'

let api: AxiosInstance;


export default api = axios.create({
    // baseURL: `http://localhost:3000/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse => {
        const data = camelCaseKeys(response.data);
        return { ...response.data, data };
    }
);

const mock = new MockAdapter(api)

if (true) {
    mock.onGet(mockUserListUrl).reply(200, userListResponceData)
}