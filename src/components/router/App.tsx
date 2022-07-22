import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Browse from "../../pages/browse/Browse";
import NotFound from "../../pages/notFound/NotFound";
import Search from "../../pages/search/Search";
import MovieDetails from "../movieDetails/MovieDetails";

function App() {
  const app = useAppSelector((state) => state.app);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/browse" />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <MovieDetails movie={app.movie} isOpen={app.showModal} />
    </BrowserRouter>
  );
}

export default App;
