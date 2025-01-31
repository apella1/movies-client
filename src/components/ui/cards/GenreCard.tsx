import { JSX } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setUserSelectedGenres } from "../../../app/features/moviesSlice";

export interface Genre {
  name: string;
  icon: JSX.Element;
}
export default function GenreCard({ genre }: { genre: Genre }) {
  const dispatch = useAppDispatch();
  const userSelectedGenres = useAppSelector(
    (state) => state.movies.userSelectedGenres
  );

  const handleGenreClick = (clickedGenre: string) => {
    let currentGenres = userSelectedGenres;
    let genres: string[];
    if (currentGenres.some((genre) => genre === clickedGenre)) {
      genres = currentGenres.filter((genre) => genre != clickedGenre);
      dispatch(setUserSelectedGenres(genres));
    } else {
      currentGenres.push(clickedGenre);
      dispatch(setUserSelectedGenres(currentGenres));
    }
  };

  const isGenreSelected = userSelectedGenres.some(
    (userSelectedGenre) => userSelectedGenre === genre.name
  );

  return (
    <button
      className={`cursor-pointer px-4 py-2 rounded-md flex items-center space-x-4 ${
        isGenreSelected ? "bg-blue-200" : "bg-teal-100"
      }`}
      onClick={() => handleGenreClick(genre.name)}
    >
      <div>{genre.icon}</div>
      <p>{genre.name}</p>
    </button>
  );
}
