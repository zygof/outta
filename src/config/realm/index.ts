import Realm, { ObjectSchema } from "realm";
import { userSchema } from "./schema";

const schema = [
  userSchema,
] as ObjectSchema[];

const realmConfig: Realm.Configuration = {
  path: "outtaApp.realm",
  schema,
  schemaVersion: 1
};

export default new Realm(realmConfig);