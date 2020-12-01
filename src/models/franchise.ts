import { FranchiseCategorie } from "./franchise.categorie"
import { Restaurant } from "./restaurant"

export interface Franchise {
    id: number,
    libelle: string,
    categorie: FranchiseCategorie,
    image: string,
    restaurants?: Array<Restaurant> | null,
    createdDate: Date
}