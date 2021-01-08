import withAuthorization from "components/Hooks/withAuthorization";

import React from "react";

const Secret = (props) => {
  return <h1>I am SECRET Page, ONLY Auth USER can see me!</h1>;
};

export default withAuthorization(Secret);
