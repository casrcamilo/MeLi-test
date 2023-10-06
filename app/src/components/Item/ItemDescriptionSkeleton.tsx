import { Container, Divider, Grid, Skeleton } from "@mui/material";
import theme from "../../theme";

const ItemDescriptionSkeleton: React.FC = () => {
  return (
    <Container sx={{ padding: theme.spacing(3) }}>
      <Grid container height="100%">
        <Grid item xs={8}>
          <Skeleton variant="rectangular" width="95%" height={400}/>
        </Grid>
        <Grid item xs={4}>
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="text" width="100%" height={30} />
          <Skeleton variant="rectangular" width="100%" height={60} />
          <br />
          <Skeleton variant="rectangular" width="100%" height={60} />
        </Grid>
      </Grid>
      <Divider orientation="horizontal" />
      <Skeleton variant="text" width="100%" height={30} />
      <br />
      <Skeleton variant="rectangular" width="100%" height={400} />
    </Container>
  );
};

export default ItemDescriptionSkeleton;
