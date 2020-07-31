import MockAdapter from 'axios-mock-adapter'

import api from 'Common/api'
import { userListUrl } from 'Common/url'
import mockUserListData from 'Tests/Data/SampleUsers.json'
let mock = null

if (process.env.NODE_ENV === 'test'){

  mock = new MockAdapter(api)
  mock
    .onGet(userListUrl).reply(200, mockUserListData)
    .onAny().passThrough()
}

export default mock