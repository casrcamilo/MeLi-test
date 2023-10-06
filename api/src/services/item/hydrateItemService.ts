import {
  Author,
  ListItemsResponse,
  HydratedListItems,
  HydratedItem,
  Item,
  Price,
  ItemResponse,
  ItemDescriptionResponse,
} from '@helpers/types';
import { NAME, LAST_NAME } from '@config/constants';

export const hydrateListItems = (
  ListItemsResponse: ListItemsResponse,
): HydratedListItems => {
  const author: Author = {
    name: NAME,
    lastname: LAST_NAME,
  };

  const categories: string[] =
    ListItemsResponse.filters
      .find(({ name }) => name === 'Categorías')
      ?.values?.[0].path_from_root?.map(({ name }) => name) || [];

  const items: Item[] = ListItemsResponse.results.map((result) => {
    const priceParts = result.price.toString().split('.');
    const price: Price = {
      currency: result.currency_id,
      amount: parseInt(priceParts[0], 10),
      decimals: priceParts[1] ? parseInt(priceParts[1], 10) : 0,
    };

    const item: Item = {
      id: result.id,
      title: result.title,
      price: price,
      picture: result.thumbnail,
      condition: result.condition,
      free_shipping: result.shipping.free_shipping,
    };

    return item;
  });

  const hydratedResponse: HydratedListItems = {
    author: author,
    categories: categories,
    items: items,
  };

  return hydratedResponse;
};

export const hydrateItem = (itemResponse: ItemResponse, itemDescriptionResponse: ItemDescriptionResponse) => {
  const author: Author = {
    name: NAME,
    lastname: LAST_NAME,
  }

  const priceParts = itemResponse.price.toString().split('.');

  const price: Price = {
    currency: itemResponse.currency_id,
    amount: parseInt(priceParts[0], 10),
    decimals: priceParts[1] ? parseInt(priceParts[1], 10) : 0,
  };

  const item: Item = {
    id: itemResponse.id,
    title: itemResponse.title,
    price,
    picture: itemResponse.thumbnail,
    condition: itemResponse.condition,
    free_shipping: itemResponse.shipping.free_shipping,
    sold_quantity: itemResponse.sold_quantity,
    description: itemDescriptionResponse.plain_text,
  }

  const hydratedResponse: HydratedItem = {
    author,
    item: item,
  };

  return hydratedResponse;
}
