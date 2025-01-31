import { SlAnchor, SlBadge, SlFire, SlHeart } from "react-icons/sl";
import GenreCard, { Genre } from "./ui/cards/GenreCard";

const genres: Genre[] = [
  {
    name: "Trending",
    icon: <SlFire />,
  },
  {
    name: "Romance",
    icon: <SlHeart />,
  },
  {
    name: "Action",
    icon: <SlAnchor />,
  },
  {
    name: "Animation",
    icon: <SlBadge />,
  },
];

export default function Genres() {
  return (
    <div className="flex items-center space-x-4 justify-between px-16 py-2">
      {genres.map((genre) => (
        <GenreCard genre={genre} />
      ))}
    </div>
  );
}
