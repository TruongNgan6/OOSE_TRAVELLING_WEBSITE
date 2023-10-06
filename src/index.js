import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTours from "./Components/AllTours/AllTours";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Destination from "./Components/Destination/Destination";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <React.StrictMode> */}
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="all-tours" element={<AllTours />} />
        <Route path="blog" element={<Blog />} />
        <Route path="destination" element={<Destination />} />
      </Route>
      {/* </React.StrictMode> */}
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
