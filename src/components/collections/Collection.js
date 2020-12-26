import React, {useState, useEffect} from "react";
import Filter from "../filter/Filter";
import Products from "../Products/Products";
import { Grid } from "@material-ui/core";
import { useStyles } from "./styles";
import {commerce} from "../../lib/commerce";

const Collection = ({ onAddToCart, handleUpdateCartQty }) => {
    const [category, setCategory]= useState(null);
    const [products, setProducts] = useState([]);
  const classes = useStyles();
  

  useEffect(()=>{
      async function getProducts(){
          const {data} = await commerce.products.list();
          console.log(data)
          setProducts(data)
      }
      getProducts();
  },[])

  async function handleCategory(name){
      const {data} = await commerce.products.list({ category_slug: name });
      console.log(...data)
      setProducts([...data]);
  }


  return (
    <div className={classes.root}>
      <Grid container className={classes.main}>
        <Grid item className={classes.grid1}>
          <Filter handleCategory={handleCategory} />
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
