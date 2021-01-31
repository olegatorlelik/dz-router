import React from "react";
import { Link } from "react-router-dom";
import { PlayerAPI } from "../../bll/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  player: {
    color: "orange",
    padding: "20px",
    fontFamily: "'Indie Flower', cursive;",
    textDecoration: "none",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "26px",
  },
}));

const Comand = () => {
  const classes = useStyle();
  return (
    <div>
      {PlayerAPI.players.map((p) => {
        return (
          <Link className={classes.player} to={`/profail/${p.number}`}>
            <span>{p.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Comand;
