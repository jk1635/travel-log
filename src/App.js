import React from "react";
import { Routes, Route } from "react-router-dom";

// styles
import GlobalStyle from "./common/styles/GlobalStyle";

// pages
import { Home, TravelLog, TravelPlan } from "./pages/home";
import { Detail } from "./pages/detail";

// components
import { Template } from "./common/components";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Template>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/' element={<TravelLog />} />
            <Route path='travelplan' element={<TravelPlan />} />
          </Route>
          <Route path='/detail/:contentid' element={<Detail />} />
        </Routes>
      </Template>
    </div>
  );
}

export default App;
