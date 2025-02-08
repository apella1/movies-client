import FeaturedShow from "../components/FeaturedShow";
import Genres from "../components/Genres";
import MoviesList from "../components/MoviesList";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <FeaturedShow />
      <Genres />
      <MoviesList />
    </MainLayout>
  );
}
