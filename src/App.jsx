import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Code from "./pages/Code";
import Music from "./pages/Music";
import CharPixelPage from "./pages/CharPixelPage";

function App() {
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

export default App;
