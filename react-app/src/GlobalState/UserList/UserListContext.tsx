import React, { createContext, useReducer, Reducer } from 'react'
// import { reducer,initialState, initialValue, Action, State } from './UserListReducer'

import { IUser } from 'Common/type'

export interface IUserListContextState {
	users: IUser[]
}

export const initialState: IUserListContextState = {
    users: []
};

export type IUserListContextValue  = {
	state: IUserListContextState, // state
	dispatch: React.Dispatch<Action>  // dispatch
}

export const initialValue: IUserListContextValue = {state: initialState, dispatch: () => null}

const UserListContext: React.Context<typeof initialValue> = createContext(initialValue)

export type State = typeof initialState;

export type Action =
  | { type: 'SET_USERS', newUsers: IUser[] }
  | { type: 'SORT', asc: boolean, orderBy: string}


export const userReducer = (state: State, action: Action):State => {
    switch (action.type){
			case "SET_USERS":
				return {...state, users: action.newUsers}
			case "SORT":
				return state
			default:
				return state
    }
}


interface UserListProviderPorps {
	children: React.ReactNode
}

export const UserListProvider: React.FC<UserListProviderPorps> = ({ children }) => {

	const [state, dispatch] = useReducer<Reducer<State, Action>>(userReducer, initialState)
	return (
		<UserListContext.Provider value={{state, dispatch}} >
			{children}
		</UserListContext.Provider>
	)
}

export default UserListContext