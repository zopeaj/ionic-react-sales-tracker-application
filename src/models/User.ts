import { Favorite } from "./Favorite";
import { Product } from "./Product";


interface User {
  id: number;
  username: string;
  email: string;
  isAuthentication: boolean;
  role: string;
  addToFavorite: Favorite[];
  product: Product[];
}


const userData: User = {
  id: 5,
  username: "Salibas",
  email: "salibas@example.com",
  isAuthentication: false,
  role: "USER",
  addToFavorite: [
    {
      id: 839,
      productId: 1892
    },
    {
      id: 189,
      productId: 1923
    }
  ],
  product: [
    {
      productId: 839,
      name: "onion",
      category: "bulbs",
      price: 200,
      currency: 'dollar'
    },
    {
      productId: 189,
      name: 'carrot',
      category: "builbs",
      price: 200.2,
      currency: 'dollar'
    }
  ]
}
