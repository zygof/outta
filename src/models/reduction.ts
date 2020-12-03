import { Article, Franchise } from ".";

export default interface Reduction {
    id: string,
    articleID: string,
    franchiseID: string,
    tousLesRestaurants: boolean,
    listeRestaurantID: Array<string> | null,
    pourcentageReduction: number,
    prixAvantReduction: number,
    prixApresReduction: number | null,
    jourRestant: number | null,
    startDate: Date,
    endDate: Date,
    createdDate: Date,
    article: Article,
    franchise: Franchise
}