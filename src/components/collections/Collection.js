import React, { useState, useEffect } from "react";
import Filter from "../filter/Filter";
import Products from "../Products/Products";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import { commerce } from "../../lib/commerce";

const Collection = ({
  products,
  onAddToCart,
  handleUpdateCartQty,
  handleCategory,
}) => {
  const [category, setCategory] = useState(null);

  const classes = useStyles();

  function handleData(name) {
    handleCategory(name);
  }

  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item className={classes.grid1}>
          <Filter handleCategory={handleData} />
        </Grid>
        <Grid item className={classes.grid2}>
          <Products
            products={products}
            onAddToCart={onAddToCart}
            handleUpdateCartQty={handleUpdateCartQty}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Collection;
