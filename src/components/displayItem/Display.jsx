import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Color, Label, Item } from "./display.elements";
import Carousel from "react-elastic-carousel";
import Related from "./related/Related";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Display = ({ match, handleAddToCart }) => {
  const { id } = match.params;
  const classes = useStyles();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [variant, setVariant] = useState(null);
  const [productId, setProductId] = useState("");
  const [variantId, setVariantId] = useState(null);
  const [color, setColor] = useState("");
  const [url, setUrl] = useState("");
  const [select, setSelect] = useState(false);

  useEffect(
    function () {
      const getProduct = async () => {
        const response = await commerce.products.retrieve(id);
        setProduct(response);
        setUrl(response.media.source);
        setVariant(...response.variants);
        setProductId(response.id);
        setLoading(false);
      };
      getProduct();
    },
    [id]
  );

  function handleUrl(url) {
    setUrl(url);
  }
  console.log(product);

  const handleOption = (variantId, color, mainId) => {
    setColor(color);
    setVariantId({ [mainId]: variantId });
  };

  const addToCart = (productId, quantity, variantId) => {
    if (variantId) {
      handleAddToCart(productId, quantity, variantId);
      setSelect(false);
    } else setSelect(true);
  };

  const handleRelatedAdd = (productId, quantity) => {
    handleAddToCart(productId, quantity);
  };

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className={classes.root}>
          <Paper variant="outlined" className={classes.paper}>
            <Grid container direction="row" spacing={3}>
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
                <Grid container item direction="column">
                  <Grid item>
                    <Typography
                      gutterBottom
                      variant="body1"
                    >{`Color: ${color}`}</Typography>
                  </Grid>
                  <Grid item>
                    {variant.options.map((product) => (
                      <Color
                        key={product.id}
                        color={product.name}
                        onClick={() =>
                          handleOption(product.id, product.name, variant.id)
                        }
                      />
                    ))}
                  </Grid>
                  <Grid item>
                    {select && <Label>Please Select a color</Label>}
                  </Grid>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
                    onClick={() => addToCart(productId, 1, variantId)}
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          <div className={classes.carousel}>
            <Carousel breakPoints={breakPoints}>
              {product.related_products.map((product) => (
                <Related
                  product={product}
                  key={product.id}
                  addToCart={handleRelatedAdd}
                />
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
