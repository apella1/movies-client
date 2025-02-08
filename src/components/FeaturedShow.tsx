export default function FeaturedShow() {
  return (
    <section className="h-[80vh] flex flex-col justify-end bg-[url(/images/header2.jpg)] p-16 text-white font-medium bg-cover">
      <div className="flex flex-col space-y-3 text-base">
        <h1 className="font-semibold">Gladiator II</h1>
        <div className="flex items-center space-x-3">
          <p>HD</p>
          <p>7.1</p>
          <p>148 min</p>
          <div className="flex items-center space-x-3">
            <p>Action,</p>
            <p>Adventure,</p>
            <p>Drama,</p>
          </div>
        </div>
        <p className="w-[50%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, qui
          ipsum nostrum saepe rerum, ex sunt itaque, animi dolorum eum beatae
          inventore facere harum! Magni atque possimus quas corrupti
          laudantium...
        </p>
        <button className="self-start bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm">
          Watch Now
        </button>
      </div>
    </section>
  );
}
