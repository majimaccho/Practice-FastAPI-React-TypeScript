import MockAdapter from 'axios-mock-adapter'

import api from 'Common/api'
import { mockUserListUrl } from 'Common/url'
import mockUserListData from 'Tests/Data/SampleUsers.json'
const mock = new MockAdapter(api)

mock
  .onGet(mockUserListUrl).reply(200, mockUserListData)
  .onAny().passThrough()
  
export default mock