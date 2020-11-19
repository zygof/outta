import Realm, { ObjectSchema } from "realm";
import { userSchema } from "./schema";

const schema = [
  userSchema,
] as ObjectSchema[];

export const realmApp =
  Realm.open({
    path: "outtaApp.realm",
    schema: schema,
    schemaVersion: 1
  });

