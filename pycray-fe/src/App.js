import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assesment from "./component/pages/Assestment";
import NotFound from "./component/pageNotFound";
import { PropertyProvider } from "./component/pages/ContextApi/ContextAPI ";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage data={landingPageData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

const LandingPage = () => {
  return (
    <div>
      <PropertyProvider>
        <Assesment />
      </PropertyProvider>
    </div>
  );
};

export default App;
