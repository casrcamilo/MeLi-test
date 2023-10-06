import { Request, Response } from 'express';
import { getItemList, getItemDescription } from '@services/item/itemService';
import { hydrateListItems, hydrateItem } from '@services/item/hydrateItemService';

export const getItems = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string; // Get the query parameter from the request

    // Call the service to fetch data from the API
    const data = await getItemList(query);

    // hydrate the response
    const hydratedResponse = hydrateListItems(data);

    // Send the retrieved data as the response
    res.json(hydratedResponse);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id: itemId } = req.params;

    // Call the service to fetch data from the API
    const { itemResponse, itemDescriptionResponse } = await getItemDescription(itemId);

    // hydrate the response
    const hydratedResponse = hydrateItem(itemResponse, itemDescriptionResponse);

    // Send the retrieved data as the response
    res.json(hydratedResponse);
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' });
  }
};