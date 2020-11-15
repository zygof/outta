import { Nullable } from '../lib/generic.types';

export interface Product {
  readonly id: number;
  readonly name: string;
  readonly description: Nullable<string>;
  readonly price: number;
  readonly inStock: boolean;
  readonly sku: Nullable<string>;
}