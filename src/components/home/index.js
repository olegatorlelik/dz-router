import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Collapse } from "@material-ui/core";
const useStyle = makeStyles((theme) => ({
  titleColor: {
    color: "yellow",
    fontFamily: "'Indie Flower', cursive",
    fontSize: "30px",
  },
  titleText: {
    color: "white",
    fontFamily: "'Indie Flower', cursive",
    fontSize: "30px",
  },
  boxTitle: {
    display: "flex",
    justifyContent: "center",
  },
}));

const Home = (props) => {
  const classes = useStyle();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.boxTitle}>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <h1>
          <span className={classes.titleColor}>Главная </span>{" "}
          <span className={classes.titleText}>страница</span>
        </h1>
      </Collapse>
    </div>
  );
};

export default Home;
