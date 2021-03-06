import { Franchise } from "./franchise";
import Localisation from "./localisation"

export default interface Restaurant {
    id: string,
    franchiseID: string,
    localisation: Localisation,
    images: Array<{ uri: string }> | null,
    reviews: number,
    ratings: number,
    franchise: Franchise,
    nbReductionEncours: number
}