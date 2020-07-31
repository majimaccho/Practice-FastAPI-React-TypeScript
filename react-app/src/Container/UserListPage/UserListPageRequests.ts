import { AxiosPromise } from 'axios';

import { userListUrl } from "Common/url"
import { IUserInfo } from "Common/type"
import api from 'Common/api'

type UserListResponce = IUserInfo[]

export const getUserList = (): AxiosPromise<UserListResponce>  => {
    return api.get(userListUrl)
}

