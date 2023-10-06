import React, { useEffect, useMemo, Fragment } from "react";
import { Paper, Divider } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ItemSkeleton from "../components/ListItems/ItemSkeleton";
import CategoriesBreadcrumbs from "../components/common/CategoriesBreadcrums";
import { MAX_RESULTS } from "../utils/constants";
import ItemRow from "../components/ListItems/ItemRow";
import { useAppContext } from "../AppContext";

const ListItems: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { fetchListItems, isLoadingListItems, listItems } = useAppContext();

  const search = searchParams.get("search");
  
  const renderSkeletons = useMemo(
    () =>
      // Render a list of Skeleton according a constant value
      Array(MAX_RESULTS)
        .fill(0)
        .map((_, index) => (
          <Fragment key={index}>
            <ItemSkeleton key={index} />
            {index !== MAX_RESULTS - 1 && <Divider orientation="horizontal" />}
          </Fragment>
        )),
    []
  );

  const renderItems = useMemo(
    () =>
    listItems?.map((item, index) => (
          <Fragment key={item.id}>
            <ItemRow item={item} />
            {index !== listItems?.length - 1 && <Divider orientation="horizontal" />}
          </Fragment>
        )),
    [listItems]
  );

  useEffect(() => {
    if (search) fetchListItems(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <>
      <CategoriesBreadcrumbs />
      <Paper elevation={3}>
        {isLoadingListItems ? renderSkeletons : renderItems}
      </Paper>
    </>
  );
};

export default ListItems;
