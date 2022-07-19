import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import GlobalStyle from "./common/styles/GlobalStyle";

// pages
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";

// components
import { Template } from "./common/components";
import Past from "./pages/home/Past";
import Future from "./pages/home/Future";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Template>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='past' element={<Past />} />
            <Route path='future' element={<Future />} />
          </Route>
          <Route path='/detail/:contentid' element={<Detail />} />
        </Routes>
      </Template>
    </div>
  );
}

export default App;
