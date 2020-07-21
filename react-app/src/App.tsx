import React, { useState, useRef } from 'react';
import './App.css';
import 'Scss/index.scss'
import { IUser, IGroup } from "Common/type";
import { UserTable } from 'Components/UserTable/UserTable'
import { Header } from "Components/Header/Header";

type InputRef = React.RefObject<HTMLInputElement> | null | undefined

const initialUsers: IUser[] = [
  
  {id: "567890", name: "Popo", group: {id: "234567", name: "Group 1"}, createdAt: "2020/01/12"}
]

const  App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>(initialUsers)
  const inputRef = useRef<InputRef>()

  return (
    <div className="App">
      <Header title="React TypeScript Practice" />
      
      <UserTable users={users}/>
    </div>
  );
}

export default App;
