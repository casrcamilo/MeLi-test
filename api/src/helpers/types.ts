// Only relevant fields
export type ListItemsResponse = {
  results: {
    id: string;
    title: string;
    price: number;
    thumbnail: string;
    condition: string;
    shipping: {
      free_shipping: boolean;
    };
    currency_id: string;
  }[];
  filters: {
    id: string;
    name: string;
    values: {
      id: string;
      name: string;
      path_from_root?: {
        id: string;
        name: string;
      }[];
    }[]
  }[]
};

export type Author = {
  name: string;
  lastname: string;
};

export type Price = {
  currency: string;
  amount: number;
  decimals: number;
};

export type ItemResponse = {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  free_shipping: boolean;
};

export type HydratedListItems = {
  author: Author;
  categories: string[]; // You can replace this with the actual categories data
  items: ItemResponse[];
};