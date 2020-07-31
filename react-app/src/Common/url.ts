const isTest = process.env.NODE_ENV === 'test'

export const mockApiUrl = isTest ? './Tests/Data' : 'http://localhost:8000'
export const userListUrl = mockApiUrl + (isTest ? '/SampleUser.json' : "/users/")