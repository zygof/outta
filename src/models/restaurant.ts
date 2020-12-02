import { Franchise } from "./franchise"

export interface Restaurant {
    id: string,
    franchise?: Franchise | null,
    adresse: string,
    codePostal: number,
    rue: string,
    reviews: number,
    ratings: number,
    nbReductionEncours: number
}