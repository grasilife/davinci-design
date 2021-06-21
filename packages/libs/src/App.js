import LocalButton from "./Button";
import React from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
const App = () => (
  <div>
    <h1>Bi-Directional</h1>
    <h2>App Base</h2>
    <LocalButton />
    <DatePicker />
    <React.Suspense fallback="Loading Button"></React.Suspense>
  </div>
);

export default App;
