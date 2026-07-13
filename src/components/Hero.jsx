function Hero() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 text-white">

        <h1 className="text-5xl md:text-6xl font-bold">
          Find Your Dream Home
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl">
          Discover apartments, villas, independent houses and commercial
          properties across India's top cities.
        </p>

      </div>
    </section>
  );
}

export default Hero;