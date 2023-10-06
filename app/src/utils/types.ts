export type Author = {
  name: string;
  lastname: string;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type Item = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
  sold_quantity?: number;
  description?: string;
};


export type ListItemsResponse = {
  author: Author;
  categories: string[];
  items: Item[];
}

export type ItemResponse = {
  author: Author;
  item: Item;
}