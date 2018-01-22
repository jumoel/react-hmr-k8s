import React from "react";
import ReactDOM from "react-dom";

import Main from "./main";

const render = e => {
  ReactDOM.render(e, document.getElementById("root"));
};

render(<Main />);

if (module.hot) {
  module.hot.accept([
    "./main",
    () => {
      render(require("./main").default);
    }
  ]);
}
