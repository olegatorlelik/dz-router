import React from "react";
import { PlayerAPI } from "../../bll/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  boxProfail: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
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

const Profail = (props) => {
  const classes = useStyle();
  const playr = PlayerAPI.getUser(props.match.params.id);
  return (
    <div className={classes.boxProfail}>
      <h1 className={classes.player}>{playr.number}</h1>
      <span className={classes.player}>{playr.position}</span>
      <span className={classes.player}>{playr.name}</span>
    </div>
  );
};

export default Profail;
