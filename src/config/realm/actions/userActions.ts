import Realm from "../";
import { userSchema } from "../schema";
import { User } from "../entities/user";

export const getUserByEmail = (userEmail: string) => new Promise((resolve, reject) => {
    resolve(Realm.objectForPrimaryKey<User>(userSchema.name, userEmail));
});

export const insertUser = (user: User) => new Promise((resolve, reject) => {
    Realm.create(userSchema.name, user);
    resolve();
});

export const updateUser = (user: User) => new Promise((resolve, reject) => {
    let updatingUser = Realm.objectForPrimaryKey<User>(userSchema.name, user.email);
    updatingUser!.name = user.name;
    resolve();
});