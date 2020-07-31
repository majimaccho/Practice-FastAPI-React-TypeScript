export interface IUser {
    readonly id: string,
    readonly name: string,
    readonly group: IGroup,
    readonly createdAt: string
}

export interface IGroup{
    readonly id: string,
    readonly name: string
}

export interface IUserInfo {
    readonly user_id: number,
    readonly user_name: string,
    readonly group_id: number,
    readonly group_name: string,
    readonly group_rank: string
}