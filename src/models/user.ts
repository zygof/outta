export interface User {
    name: string,
    lastName: string,
    email?: string | null,
    password: string,
    age: number,
    createdAt: string,
    token?:string | null
}