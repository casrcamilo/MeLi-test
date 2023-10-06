import axios from 'axios';
import { ListItemsResponse } from '@helpers/types';
import { MAX_RESULTS } from '@config/constants';

export const getItemList = async (query?: string) => {
  try {
    // Define the API endpoint URL with the query parameter
    const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=${MAX_RESULTS}`;

    // Make a GET request to the API
    const response = await axios.get(apiUrl);

    // Extract and return the data from the response
    const results: ListItemsResponse = response.data;
    return results;
  } catch (error) {
    console.error(error)
    throw error;
  }
};

export const getItemDescription = async (itemId?: string) => {
  try {
    // Define the API endpoint URL with the query parameter
    const itemUrl = `https://api.mercadolibre.com/items/${itemId}`;
    const itemDescriptionUrl = `https://api.mercadolibre.com/items/${itemId}/description`;

    const [itemResponse, itemDescriptionResponse] = await Promise.all([
      axios.get(itemUrl),
      axios.get(itemDescriptionUrl)
    ])

    return {
      itemResponse: itemResponse.data,
      itemDescriptionResponse: itemDescriptionResponse.data
    };
  } catch (error) {
    console.error(error)
    throw error;
  }
};
