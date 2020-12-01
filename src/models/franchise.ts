import { FranchiseCategorie } from "./franchise.categorie"
import { Restaurant } from "./restaurant"

export interface Franchise {
    id: number,
    libelle: string,
    categorie: FranchiseCategorie,
    image: string,
    Restaurants?: Array<Restaurant> | null,
    createdDate: Date
}