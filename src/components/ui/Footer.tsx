export default function Footer() {
  return (
    <footer className="py-8 flex items-center space-x-4 bg-blue-100">
      <div className="px-16">
        <section className="flex flex-col space-y-2">
          <h2 className="text-sm">Top Genres</h2>
          <div className="text-xs">
            <p>Animation</p>
            <p>Romance</p>
            <p>Action</p>
          </div>
        </section>
      </div>
    </footer>
  );
}
