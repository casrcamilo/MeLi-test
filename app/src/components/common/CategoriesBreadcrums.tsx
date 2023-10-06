import React from "react";
import {
  Breadcrumbs,
  Typography,
  Box,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import theme from "../../theme";
import { useAppContext } from "../../AppContext";

const CategoriesBreadcrumbs: React.FC = () => {
  const { categories } = useAppContext()
  return categories?.length ? (
    <Box sx={{ margin: theme.spacing(2)}}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
      >
        {categories?.map((category) => (
          <Typography key={category} color="text.primary">
            {category}
          </Typography>
        ))}
      </Breadcrumbs>
    </Box>
  ): null;
};

export default CategoriesBreadcrumbs;
