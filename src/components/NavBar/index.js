import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  nav: {
    background: "none",
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 0",
    flexDirection: "row",
    position: "static",
  },

  navTitle: {
    fontSize: "26px",
    fontFamily: "'Indie Flower', cursive",
    color: "#fff",
    textDecoration: "none",
    "&:hover": {
      color: "yellow",
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyle();

  return (
    <div>
      <AppBar className={classes.nav} elevation={0}>
        <Link className={classes.navTitle} to="/">
          Главная
        </Link>
        <Link className={classes.navTitle} to="/playrs">
          Команда
        </Link>
        <Link className={classes.navTitle} to="/info">
          Информация
        </Link>
      </AppBar>
    </div>
  );
};

export default NavBar;
