// create a typescript component named ItemDescription, import the appContext.ts
import React from "react";
import { useAppContext } from "../../../AppContext";
import { Button, Container, Divider, Grid, Stack, Typography } from "@mui/material";
import './itemDescription.scss';

const ItemDescription = () => {
  const { itemDescription } = useAppContext();

  return itemDescription ? (
    <Container className="item-description-container">
      <Grid container>
        <Grid item xs={12} md={8}>
          <img
            className="item-description-image"
            src={itemDescription.picture}
            alt="item thumbnail"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={2}>
            <Typography variant="subtitle1">
              {`${itemDescription.condition === "new" ? "Nuevo" : "Usado"} - ${itemDescription.sold_quantity} vendidos`}
            </Typography>

            <Typography variant="h2" className="item-row-title">
              {itemDescription.title}
            </Typography>

            <Typography variant="h3" component={"span"}>
              {`$ ${itemDescription.price.amount.toLocaleString()}`}
              <Typography variant="subtitle1" component={"sup"}>
                {itemDescription.price.decimals}
              </Typography>
            </Typography>

            <Button color="secondary" variant="contained">Comprar Ahora</Button>
            <Button color="secondary" variant="outlined">Agregar al carrito</Button>
          </Stack>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" />
      <Typography variant="h2" className="item-description-title">
        Descripción
      </Typography>
      <Typography variant="body1" className="item-description-text">
        {itemDescription.description}
      </Typography>
    </Container>
  ) : null;
};

export default ItemDescription;
