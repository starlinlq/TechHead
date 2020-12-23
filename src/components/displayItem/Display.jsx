import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const Display = ({ match }) => {
  const { id } = match.params;
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    const getProduct = async () => {
      setProduct(await commerce.products.retrieve(id));
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className={classes.root}>
          <Paper variant="outlined" className={classes.paper}>
            <Grid container direction="row" spacing={1}>
              <Grid item xs={12} sm={6} className={classes.des}>
                <img
                  className={classes.img}
                  src={product.media.source}
                  alt={product.name}
                />
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                sm={6}
                spacing={1}
                justify="space-between"
              >
                <Grid item>
                  <Typography>{product.name}</Typography>
                  <Typography
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </Grid>
                <Grid item>
                  <Button color="primary">Add to Cart</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      )}
    </>
  );
};

export default Display;
