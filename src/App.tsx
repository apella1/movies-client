import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

export default function App() {
  return (
    <main className="p-8 bg-gray-400 min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tv-shows" element={<TVShows />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
