import FeaturedShow from "../components/FeaturedShow";
import Navbar from "../components/ui/navbar";

export default function Home() {
  return (
    <main className="flex flex-col space-y-4">
      <Navbar />
      <FeaturedShow />
    </main>
  );
}
