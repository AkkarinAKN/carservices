import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/content/contact";
import Service from "./pages/service/bookingService"
import Booking from "./pages/booking/Booking"
import Successfully from "./pages/select/Successfully";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/service/v1/:serviceID" element={<Booking />} />
        <Route path="/success" element={<Successfully />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
