// src/components/HeroSection.jsx

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://freight.cargo.site/w/800/i/b1288700887be08fb7029d3c1b3c5cb437eb0db4fdc75fd6f2a03c3324403719/maze_03.gif')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-red-500 mb-4">
          AI for Learning
        </h1>
        <p className="text-lg md:text-xl text-white">
          AuraLearn helps the world’s leading education seekers discover
          <span className="font-semibold text-red-300"> intelligent and adaptive learning paths.</span>
        </p>
      </div>
    </section>
  );
}
