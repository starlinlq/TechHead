import React from "react";
import { useStyles } from "./styles";
import { WiDayCloudyWindy } from "react-icons/wi";
import { SiAudiomack } from "react-icons/si";
import { RiHandHeartLine } from "react-icons/ri";
import { ImPriceTags } from "react-icons/im";
import logo from "../../assets/music.png";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
const Home = () => {
  const classes = useStyles();
  return (
    <Container style={{ marginTop: "4%" }}>
      <Grid container justify="space-between">
        <Grid
          item
          container
          direction="column"
          justify="center"
          className={classes.grid1}
        >
          <Typography gutterBottom variant="h4">
            PREMIUM SOUND, INSPIRED BY THE TOP BRANDS
          </Typography>
          <Typography variant="body1">
            We believe in the go-getters, the early risers, the performers and
            one-more-milers of the world. To power your journey to the top, our
            team of platinum artists and leading tastemakers worked tirelessly
            to provide you with great products you'll love everyday.
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            style={{ width: 150, marginTop: "3%" }}
            component={Link}
            to="/collection"
          >
            Shop
          </Button>
        </Grid>
        <Grid item className={classes.grid2}>
          <div>
            <img className={classes.img} src={logo} alt="homeHeader" />
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        style={{ fontSize: "4rem", textAlign: "center", marginTop: "4%" }}
        justify="space-evenly"
      >
        <Grid item>
          {" "}
          <WiDayCloudyWindy />
          <Typography variant="body1">All-Day Comfort</Typography>
        </Grid>
        <Grid item>
          {" "}
          <SiAudiomack />
          <Typography variant="body1">World Class Audio Drivers</Typography>
        </Grid>
        <Grid item>
          <RiHandHeartLine />
          <Typography variant="body1">Hands-Free</Typography>
        </Grid>
        <Grid item>
          {" "}
          <ImPriceTags />
          <Typography variant="body1">Fair Price Point</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
