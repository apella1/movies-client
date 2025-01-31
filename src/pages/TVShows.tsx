import Genres from "../components/Genres";
import MoviesList from "../components/MoviesList";
import MainLayout from "../layouts/MainLayout";

export default function TVShows() {
  return (
    <MainLayout>
      <div className="pt-8">
        <Genres />
      </div>
      <MoviesList />
    </MainLayout>
  );
}
