import { sum, divide } from "./utils";
// import { a, toString } from "./dynamic";

import("./dynamic").then(({ a, b, toString }) => {
  const rta = sum(a, 9);
  console.log(toString(rta));
});
