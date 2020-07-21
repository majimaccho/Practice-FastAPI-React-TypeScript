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