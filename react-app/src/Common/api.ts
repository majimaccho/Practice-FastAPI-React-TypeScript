import axios, { AxiosInstance, AxiosResponse } from 'axios';
import MockAdapter from "axios-mock-adapter";
import camelCaseKeys from 'camelcase-keys';
import { userListUrl } from 'Common/url'
// import userListResponceData from 'Tests/Data/SampleUsers.json'

let api: AxiosInstance;


export default api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    }
});
