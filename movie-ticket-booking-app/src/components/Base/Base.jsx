import "./Base.scss";
import Router from "../../Routes/Router.jsx";
import { BrowserRouter } from "react-router-dom";


function Base() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default Base;
