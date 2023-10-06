import { Container, Grid, Skeleton } from "@mui/material";
import theme from "../../theme";

const ItemSkeleton: React.FC = () => {
  return (
    <Container sx={{ padding: theme.spacing(3), height: 200 }}>
      <Grid container height="100%">
        <Grid item xs={3}>
          <Skeleton variant="rectangular" width="90%" height="100%" />
        </Grid>
        <Grid item xs={9}>
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemSkeleton;
