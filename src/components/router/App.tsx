import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Browse from "../browse/Browse";
import NotFound from "../NotFound";
import Search from "../search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/browse" />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <MovieDetails /> */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
