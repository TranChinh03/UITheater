import { type } from "os";

export interface User {
    _id: string,
    name: string,
    email: string,
    date: string,
    gender: string,
    phone: string,
}

export type UserState = Pick<User,"name"|"date"|"email"|"gender">
export type UserName = Pick<User,"name">