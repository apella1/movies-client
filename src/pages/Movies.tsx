import Genres from "../components/Genres";
import MoviesList from "../components/MoviesList";
import MainLayout from "../layouts/MainLayout";

export default function Movies() {
  return (
    <MainLayout>
      <Genres />
      <MoviesList />
    </MainLayout>
  );
}
