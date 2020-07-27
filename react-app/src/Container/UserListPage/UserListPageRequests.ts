import { AxiosPromise } from 'axios';

import { mockUserListUrl } from "Common/url"
import { IUser } from "Common/type"
import api from 'Common/api'

interface userListResponce {
    users: IUser[]
}

export const getUserList = (): AxiosPromise<userListResponce>  => {
    return api.get(mockUserListUrl)
}

