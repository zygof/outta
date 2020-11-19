import { realmApp } from "..";
import { userSchema } from "../schema";
import { User } from "../entities/user";

export const insertUser = (user: User) => new Promise((resolve, reject) => {
    realmApp.then(realm => {
        realm.write(() => {
            realm.create(userSchema.name, user);
            resolve(user)
        })
    }).catch((error) => { reject(error) })
});

export const updateUser = (user: User) => new Promise((resolve, reject) => {
    realmApp.then(realm => {
        realm.write(() => {
            let updatingUser = realm.objectForPrimaryKey<User>(userSchema.name, user.email);
            updatingUser!.name = user.name;
            resolve();
        })
    }).catch((error) => { reject(error) })
});

export const getUserByEmail = (userEmail: string) => new Promise((resolve, reject) => {
    realmApp.then(realm => {
        realm.write(() => {
            resolve(realm.objectForPrimaryKey<User>(userSchema.name, userEmail))
        })
    }).catch((error) => { reject(error) })
});