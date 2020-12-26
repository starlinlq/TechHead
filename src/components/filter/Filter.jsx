import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const Filter = ({handleCategory}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}  >
    <div className={classes.filter}>
      <Grid item>
        <Typography gutterBottom variant="h5">Product Type</Typography>
      </Grid>
      <Grid container item >
      <Grid item><Button onClick={()=>handleCategory("headphones")}>HEADPHONES</Button></Grid>
      <Grid item><Button onClick={()=>handleCategory("earbuds")} >EARBUDS</Button></Grid>
      <Grid item><Button>ACCESSORIES</Button></Grid>
      </Grid>
      </div>
      <div className={classes.filter}>
      <Grid item>
        <Typography gutterBottom variant="h5">Brand</Typography>
      </Grid>
      <Grid container item >
      <Grid item><Button onClick={()=>handleCategory("beast")}>Beast</Button></Grid>
      <Grid item><Button  onClick={()=>handleCategory("google")}>Google</Button></Grid>
      <Grid item><Button onClick={()=>handleCategory("raycon")}>Raycon</Button></Grid>
      </Grid>
      </div>
    </Grid>
  );
};

export default Filter;
