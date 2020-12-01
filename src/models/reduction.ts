import { Article } from "./article"
import { Franchise } from "./franchise"

export interface Reduction {
    id: number,
    article: Article,
    franchise: Franchise,
    pourcentageReduction: number,
    prixAvecReduction: number,
    jourRestant: number,
    startDate: Date,
    endDate: Date,
    createdDate: Date
}