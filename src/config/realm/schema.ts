import { RealmSchema } from './lib/realm-schema.types';
import { User } from './entities/user'
import { Product } from './entities/product'

type EntityName = "User" | "Product";

type EntityNameOpt = "User?" | "Product?"; 

interface Schema<TEntity extends object> extends RealmSchema<TEntity, EntityName, EntityName | EntityNameOpt> {};   

export const userSchema: Schema<User> = {
  name: "User",
  primaryKey: "email",
  properties: {
    id: "int",
    name: "string",
    email: "string",
    address: "string",
    phone: "string?"
  }
};

export const productSchema: Schema<Product> = {
  name: "Product",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    description: "string?",
    price: "double",
    inStock: "bool",
    sku: "string?"
  }
};








