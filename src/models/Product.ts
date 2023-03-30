export interface Product {
  productId: number;
  name: string;
  category: string;
  price: number;
  currency: string;
}

const productData: Product[] = [
  {
    productId: 1923,
    name: "Yam",
    category: "root",
    price: 400.2,
    currency: 'rwanda'
  },
  {
    productId: 1924,
    name: "Spinach",
    category: "vegetables",
    price: 500.2,
    currency: 'dollar'
  },
  {
    productId: 1925,
    name: "lime",
    category: "fruits",
    price: 23.12,
    currency: 'naira'
  }
]
