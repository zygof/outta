import { User } from "./user"
import { Reduction } from "./reduction"
import { Article } from "./article"
import { Franchise } from "./franchise"
import { Restaurant } from "./restaurant"
import { FranchiseCategorie } from "./franchise.categorie"
import { ArticleCategorie } from "./article.categorie"
import Filter from "./filter"


interface ISource {
  source: string | { uri: string };
}

type Navigation = {
  navigate: (scene: string) => void;
};

type AuthDetails = {
  email: string;
  password: string;
  name?: string;
};


export { Filter, AuthDetails, User, Reduction, Restaurant, Article, Franchise, FranchiseCategorie, ArticleCategorie };
