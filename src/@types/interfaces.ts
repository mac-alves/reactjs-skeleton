export interface Response{
    config: object;
    headers: object;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}

export interface UserAuth {
    username: string;
    email: string;
    id: number
}

export interface ReaponseSignIn extends Response {
    data: {
        access: string;
        refresh: string;
        user: UserAuth;
    }
}

export interface ResponseDefault extends Response{
    data?: any;
}

export interface User {
    id: number,
    name: string,
    cpd: number,
    img_blob: string,
    authorized: boolean,
}

export interface ListUser {
    users: [] | User[]
}

export interface ResponseReadUsers extends Response{
    data: ListUser,
}

export interface UserWithSrc extends User {
    src: any;
}