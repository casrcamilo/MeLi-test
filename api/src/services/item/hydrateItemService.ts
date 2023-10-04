import {
  Author,
  ListItemsResponse,
  HydratedListItems,
  ItemResponse,
  Price,
} from '@helpers/types';
import { NAME, LAST_NAME } from '@config/constants';

const hydrateListItems = (
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

  const items: ItemResponse[] = ListItemsResponse.results.map((result) => {
    const priceParts = result.price.toString().split('.');
    const price: Price = {
      currency: result.currency_id,
      amount: parseInt(priceParts[0], 10),
      decimals: priceParts[1] ? parseInt(priceParts[1], 10) : 0,
    };

    const item: ItemResponse = {
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

export default hydrateListItems;
