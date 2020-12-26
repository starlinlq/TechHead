import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Fade,
  Button,
  Grid,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";

const PrimarySearchAppBar = ({ totalItems }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [mobile, setMobile] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function mobMenu() {
      return window.innerWidth < 600 ? setMobile(true) : setMobile(false);
    }
    mobMenu();
  }, []);

  const mobileMenu = (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src={logo}
            alt="commerce.js"
            height="25px"
            className={classes.image}
          />{" "}
          TechHub
        </Typography>

        <div className={classes.button}>
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
        <div>
          <Button
            className={classes.icon}
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AiOutlineMenu />{" "}
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>HEADPHONES</MenuItem>
            <MenuItem onClick={handleClose}>EARBUDS</MenuItem>
            <MenuItem onClick={handleClose}>ACCESSORIES</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );

  const menu = (
    <AppBar position="fixed" className={classes.appBar} color="inherit">
      <Toolbar className={classes.tool}>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          className={classes.title}
          color="inherit"
        >
          <img
            src={logo}
            alt="commerce.js"
            height="25px"
            className={classes.image}
          />{" "}
          TechHub
        </Typography>
        <Grid container spacing={3}>
          <Grid item>
            <Button>HEADPHONES</Button>
          </Grid>
          <Grid item>
            <Button>EARBUDS</Button>
          </Grid>
          <Grid item>
            <Button>ACCESSORIES</Button>
          </Grid>
        </Grid>

        <div className={classes.button}>
          <IconButton
            component={Link}
            to="/cart"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={totalItems} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );

  return <>{mobile ? mobileMenu : menu}</>;
};

export default PrimarySearchAppBar;
