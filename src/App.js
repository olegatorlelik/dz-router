import "./App.css";
import React from "react";
import ConteinerNavBar from "./conteiners/conteinerNavBar";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/home/index";
import Comand from "./components/comands/index";
import ConteinerProfail from "./conteiners/conteinerProfail/index";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
const App = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: "100vh",
      backgroundImage: `url(${
        process.env.PUBLIC_URL +
        "https://img5.goodfon.ru/wallpaper/big/5/de/voda-kamni-pirs-most-zakat-foto.jpg"
      })`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <ConteinerNavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/playrs/" component={Comand} />
        <Route path="/profail/:id" component={ConteinerProfail} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
