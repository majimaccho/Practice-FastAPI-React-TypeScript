import React from 'react';

import { UserListProvider } from 'GlobalState/UserList/UserListContext'
import { UserTable } from 'Components/UserTable/UserTable'
import { Header } from "Components/Header/Header";
import useUserListPage from './useUserListPage'

const  UserListPageWrapper: React.FC = () => {
  return (
    <div className="UserListPage">
      <UserListProvider>
        <UserListPage />
      </UserListProvider>
    </div>
  );
}

const  UserListPage: React.FC = () => {
  useUserListPage()

  return (
    <>
        <Header title="React TypeScript Practice" />
        <UserTable/>
    </>
  );
}


export default UserListPageWrapper;