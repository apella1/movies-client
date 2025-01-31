import MovieCard from "./ui/cards/MovieCard";

const arr: number[] = [];
for (let i = 0; i < 60; i++) [arr.push(i)];
export default function MoviesList() {
  return (
    <section className="grid grid-cols-8  gap-8 px-16 pt-8">
      {arr.map((a) => (
        <MovieCard key={a} />
      ))}
    </section>
  );
}
