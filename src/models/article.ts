import { ArticleCategorie } from "./article.categorie"

export interface Article {
    id: string,
    libelle: string,
    categorie: ArticleCategorie,
    prix: number,
    image: string | null,
    createdDate: Date,
}