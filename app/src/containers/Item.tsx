import React, { useEffect } from "react";
import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import CategoriesBreadcrumbs from "../components/common/CategoriesBreadcrums";
import { useAppContext } from "../AppContext";
import ItemDescription from "../components/Item/ItemDescription";
import ItemDescriptionSkeleton from "../components/Item/ItemDescriptionSkeleton";

const Item: React.FC = () => {
  const location = useLocation();
  const { fetchItem, isLoadingItemDescription } = useAppContext();

  // Access the current URL
  const currentUrl = location.pathname;

  useEffect(() => {
    const itemId = currentUrl.split("/")[2];
    if (itemId) fetchItem(itemId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUrl]);

  return (
    <>
      <CategoriesBreadcrumbs />
      <Paper elevation={3}>
        {isLoadingItemDescription 
        ? <ItemDescriptionSkeleton />
        : <ItemDescription />}
      </Paper>
    </>
  );
};

export default Item;
