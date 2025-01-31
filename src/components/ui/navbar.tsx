import { useLocation } from "react-router";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/movies" },
  { name: "TV Shows", href: "/tv-shows" },
];

export default function Navbar() {
  const pathname = useLocation().pathname;

  return (
    <nav className="flex space-x-4 justify-between pt-4 px-16 text-sm">
      <div className="flex items-center space-x-6 font-medium">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`${item.href === pathname ? "text-blue-800" : ""}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <input type="search" placeholder="Search by name" className="rounded" />
    </nav>
  );
}
