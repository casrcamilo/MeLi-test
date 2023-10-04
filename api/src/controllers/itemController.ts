import { Request, Response } from 'express';
import { getItemList } from '@services/item/itemService';
import hydrateListItems from '@services/item/hydrateItemService';

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
    // Handle errors, e.g., log the error or send an error response
    res.status(500).json({ error: 'An error occurred' });
  }
};