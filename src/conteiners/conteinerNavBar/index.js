import React from "react";
import NavBar from "../../components/NavBar";

class ConteinerNavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <NavBar {...this.props} />;
  }
}

export default ConteinerNavBar;
