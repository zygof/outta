import { FranchiseCategorie } from "./franchise.categorie"
import { Restaurant } from "./restaurant"

export interface Franchise {
    id: string,
    libelle: string,
    categorie: FranchiseCategorie,
    logo: string,
    images: Array<string>,
    restaurants?: Array<Restaurant> | null,
    createdDate: Date
}