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


export type ItemResponse = {
  id: string
  title: string;
  price: number;
  currency_id: string;
  thumbnail: string;
  condition: string;
  shipping: {
    free_shipping: boolean;
  };
  sold_quantity: number;
}

export type ItemDescriptionResponse = {
  plain_text: string;
}

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

export type HydratedListItems = {
  author: Author;
  categories: string[];
  items: Item[];
};

export type HydratedItem = {
  author: Author;
  item: Item;
}