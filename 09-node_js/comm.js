import hello from "./module.js";
import { name, age as num, obj } from "./module.js";
// import a from "./a.js";
// import b from "./b.js";

import { a, b } from "./index.js";

hello();
console.log(name);
console.log(num);
console.log(obj);

a();
b();
