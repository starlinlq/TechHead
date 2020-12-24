import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { Paper, Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const Display = ({ match }) => {
  const { id } = match.params;
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");

  useEffect(function () {
    const getProduct = async () => {
      const response = await commerce.products.retrieve(id);
      setProduct(response);
      setUrl(response.media.source);
      setLoading(false);
    };
    getProduct();
  }, []);

  function handleUrl(url) {
    setUrl(url);
  }

  console.log(product);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className={classes.root}>
          <Paper variant="outlined" className={classes.paper}>
            <Grid container direction="row" spacing={1}>
              <Grid container item xs={12} sm={6}>
                <Grid item xs={12}>
                  <img className={classes.img} src={url} alt={product.name} />
                </Grid>
                <Grid
                  xs={12}
                  item
                  container
                  direction="row"
                  spacing={1}
                  justify="center"
                >
                  {product.assets.map((data) => (
                    <Grid item xs={3} key={data.id}>
                      {" "}
                      <img
                        onMouseEnter={() => handleUrl(data.url)}
                        onMouseLeave={() => handleUrl(product.media.source)}
                        src={data.url}
                        alt={data.id}
                        className={classes.img2}
                      />{" "}
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid
                item
                container
                direction="column"
                xs={12}
                sm={6}
                spacing={1}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="h4"
                    className={classes.grid}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="h5">
                    {product.price.formatted_with_symbol}
                  </Typography>
                  <Typography
                    variant="body1"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </Grid>
                <Grid item>
                  <Button variant="outlined" size="large" color="secondary">
                    Add to Cart
                  </Button>
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
