export interface User {
    uid: string,
    name: string,
    lastName: string,
    email?: string | null,
    age: number | null,
    phone: string | null,
    isCompteRestaurant: boolean;
    createdAt: string,
    token?: string | null
}