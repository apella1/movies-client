import { useLocation } from "react-router";

export default function Navbar() {
  const pathname = useLocation();
  console.log(pathname);
  return (
    <nav className="flex space-x-4 justify-between pt-4 px-16 text-sm">
      <div className="flex items-center space-x-6 font-medium">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/tv-shows">TV Shows</a>
      </div>
      <input type="search" placeholder="Search by name" />
    </nav>
  );
}
