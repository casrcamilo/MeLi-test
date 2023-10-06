import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";
import { Item, ItemResponse, ListItemsResponse } from "./utils/types";

// Define the shape of your context data
interface AppContextData {
  listItems?: Item[];
  categories?: string[];
  itemDescription?: Item;
  isLoadingListItems: boolean;
  isLoadingItemDescription: boolean;
  fetchListItems: (search: string) => void;
  fetchItem: (itemId: string) => void;
}

// Create a new context
const AppContext = createContext<AppContextData | undefined>(undefined);

// Define the props for the provider component
interface AppProviderProps {
  children: ReactNode;
}

// Create a provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [listItems, setListItems] = useState<Item[]>([]);
  const [categories, setCategories] = useState<string[]>();
  const [isLoadingListItems, setIsLoadingListItems] = useState(false);
  const [itemDescription, setItemDescription] = useState<Item>();
  const [
    isLoadingItemDescription,
    setIsLoadingItemDescription,
  ] = useState(false);

  const fetchListItems = async (search: string) => {
    setIsLoadingListItems(true);

    axios
      .get(`http://localhost:3001/api/items?q=${search}`)
      .then((response) => {
        const responseData = response.data as ListItemsResponse;
        setListItems(responseData.items);
        setCategories(responseData.categories);
      })
      .catch(() => {
        throw new Error("Network response was not ok");
      })
      .finally(() => {
        setIsLoadingListItems(false);
      });
  };

  const fetchItem = async (itemId: string) => {
    setIsLoadingItemDescription(true);

    axios
      .get(`http://localhost:3001/api/items/${itemId}`)
      .then((response) => {
        const responseData = response.data as ItemResponse;
        setItemDescription(responseData.item);
      })
      .catch(() => {
        throw new Error("Network response was not ok");
      })
      .finally(() => {
        setIsLoadingItemDescription(false);
      });
  };

  const contextValue: AppContextData = {
    listItems,
    categories,
    isLoadingListItems,
    itemDescription,
    isLoadingItemDescription,
    fetchListItems,
    fetchItem,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useAppContext = (): AppContextData => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
