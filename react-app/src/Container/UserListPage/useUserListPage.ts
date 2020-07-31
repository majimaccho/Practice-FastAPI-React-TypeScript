import { useContext, useEffect } from 'react'
import UserListContext from "GlobalState/UserList/UserListContext"
import { getUserList } from "./UserListPageRequests"

export default ():void => {
  const { dispatch } = useContext(UserListContext)

  useEffect(() => {
    getUserList()
    .then(({data}) => {
      dispatch({ type: 'SET_USERS', newUsers: data })
    })
    .catch(console.error)
  }, [])

  return
}