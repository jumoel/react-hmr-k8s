import React from "react";
import { hot } from "react-hot-loader";

import { Foo } from "./sub";

const Main = () => (
  <h1>
    asd!<Foo />
  </h1>
);
export default hot(module)(Main);
