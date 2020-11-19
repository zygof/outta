import { Nullable } from '../lib/generic.types';

export interface User {
    id: number;
    name: string;
    address: string;
    email: string;
    phone: Nullable<string>;
    deleted?: boolean;
  }