import React from "react";
import { withRouter } from "react-router-dom";
import Profail from "../../components/profile/index";
class ConteinerProfail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Profail {...this.props} />
      </div>
    );
  }
}

export default withRouter(ConteinerProfail);
