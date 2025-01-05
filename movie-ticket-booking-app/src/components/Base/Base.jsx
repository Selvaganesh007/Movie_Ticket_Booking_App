import "./Base.scss";
import Router from "../../Routes/Router.js";
import { BrowserRouter } from "react-router-dom";


function Base() {
  return (
    <BrowserRouter>
      <div>hi</div>
      <Router />
    </BrowserRouter>
  );
}

export default Base;
