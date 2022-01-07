import { configure } from "mobx";

export { observable, autorun } from "mobx";

configure({
  enforceActions: "never",
});

// export const observable = () => {
//   // your code here
// };

// export const autorun = () => {
//   // your code here
// };
