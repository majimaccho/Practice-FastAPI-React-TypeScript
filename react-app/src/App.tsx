import React from 'react';
import './App.css';
import 'Scss/index.scss'

import UserListPage from 'Container/UserListPage/UserListPage'

const  App: React.FC = () => {

  return (
    <div className="App">
      <UserListPage />
    </div>
  );
}

export default App;
