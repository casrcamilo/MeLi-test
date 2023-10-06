import { Chip, Container, Grid, Stack, Typography } from "@mui/material";
import { Item } from "../../../utils/types";
import "./itemRow.scss";
import { Link } from "react-router-dom";

interface ItemRowProps {
  item: Item;
}

const ItemRow: React.FC<ItemRowProps> = ({ item }) => {
  return (
    <Link to={`/items/${item.id}`} className="item-row-link">
      <Container className="item-row-container">
        <Grid container height="100%" spacing={2}>
          <Grid item xs={4} md={2} className="item-row-image-container">
            <img
              className="item-row-image"
              src={item.picture}
              alt="item thumbnail"
            />
          </Grid>
          <Grid item xs={8} md={10}>
            <Stack spacing={2} >
              <Typography variant="h2" className="item-row-title">
                {item.title}
              </Typography>
              <Typography variant="h5" className="item-row-price">
                {item.price.amount.toLocaleString()}
              </Typography>
              {item.free_shipping && (
                <Chip
                  className="item-row-shipping"
                  label="Envío gratis"
                  color="success"
                  size="small"
                  sx={{ borderRadius: 3 }}
                />
              )}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Link>
  );
};

export default ItemRow;
