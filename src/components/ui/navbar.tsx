export default function Navbar() {
  return (
    <nav className="flex space-x-4 justify-between">
      <div className="flex items-center space-x-6 font-medium">
        <a href="/">Home</a>
        <a href="/movies">Movies</a>
        <a href="/tv-shows">TV Shows</a>
      </div>
      <input type="search" placeholder="Search for a movie by name" />
    </nav>
  );
}
