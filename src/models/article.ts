export default interface Article {
    id: string,
    libelle: string,
    categorieID: string,
    prix: number,
    image: string | null,
    createdDate: Date,
}