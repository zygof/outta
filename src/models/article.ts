import { ArticleCategorie } from "./article.categorie"

export interface Article {
    id: number,
    libelle: string,
    categorie: ArticleCategorie,
    prix: number,
    image: string | null,
    createdDate: Date,
}