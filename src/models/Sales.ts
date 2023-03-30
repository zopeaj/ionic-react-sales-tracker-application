import { Product } from "./Product";

interface Sold {
  date: string;
  products: Product[];
}

interface Returned {
  date: string;
  products: Product[];
  total: number;
}

interface Sales {
  id: number;
  name: string;
  customerName: string;
  isAuthenticated: boolean;
  age: number;
  email: string;
  sold: Sold[];
  returned: Returned;
}



const salesData: Sales = {
  id: 1324,
  name: "daniel",
  customerName: "Salibas",
  isAuthenticated:false ,
  age: 29,
  email: "daniel@sales.com",
  sold:[
      {
        date: new Date().toLocaleDateString().toString(),
        products: [
           {
             productId: 123,
             name: "onion",
             category: "bulbs",
             price: 400.2,
             currency: 'dollar'
           }
        ],
      }
  ],
  returned: {
    date: new Date().toLocaleDateString().toString(),
    products: [
       {
         productId: 123,
         name: "onion",
         category: "bulbs",
         price: 400.2,
         currency: 'dollar'
       }
    ],
    total: 0
  },
}
