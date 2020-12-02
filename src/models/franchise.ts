import { FranchiseCategorie } from "./franchise.categorie"
import { Restaurant } from "./restaurant"

export interface Franchise {
    id: string,
    libelle: string,
    categorie: FranchiseCategorie,
    logo: string,
    images: Array<{ uri: string }>,
    proprietaire: string,
    createdDate: Date
}