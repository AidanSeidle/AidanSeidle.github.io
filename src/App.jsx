import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//import React, { useState } from 'react';

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import MobileLayout from "./components/MobileLayout";
import Home from "./pages/Home";
import Mobile from "./pages/Mobile";
import Code from "./pages/Code";
import Music from "./pages/Music";
import CharPixelPage from "./pages/CharPixelPage";


function App() {
  const isMobile = (window.innerWidth < 768);

  if (isMobile) {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<MobileLayout><Mobile /></MobileLayout>} />
            <Route path="*" element={<h2>Page Not Found</h2>} />
          </Routes>
        </Router>
      );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/code" element={<Layout><Code /></Layout>} />
          <Route path="/music" element={<Layout><Music /></Layout>} />
          <Route path="*" element={<h2>Page Not Found</h2>} />


          <Route path="/char-pixel" element={<Layout><CharPixelPage /></Layout>} />

        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
