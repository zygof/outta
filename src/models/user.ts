export interface User {
    uid:string,
    name: string,
    lastName: string,
    email?: string | null,
    password: string,
    age: number,
    isCompteRestaurant: boolean;
    createdAt: string,
    token?:string | null
}