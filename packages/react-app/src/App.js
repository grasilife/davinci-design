import React from "react";
import "./App.less";
import Routers from "@/routers/index";
import { Provider } from "react-redux";
import store from "@/store";
console.log(store, "store");
const App = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default App;
