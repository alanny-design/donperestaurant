import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Services from "./pages/Services";
import PhotoGalery from "./pages/PhotoGalery";
import Bookings from "./pages/Bookings";
import Maps from "./pages/Maps";

function App() {
  return (
    <>
    
    <Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/Services" element={<Services />} />
					<Route exact path="/Photo Galery" element={<PhotoGalery />} />
          <Route exact path="/Photo Galery" element={<Bookings />} />
          <Route exact path="/Photo Galery" element={<Maps />} />
				</Routes>
			</Router>
    </>
  );
}

export default App;
