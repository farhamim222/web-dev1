/*function Hero() {
  return (
    <div>
      <p className="section-dummy">Hero</p>
      <p className="section-dummy">...</p>
    </div>
  );
}

export default Hero;*/
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-banner">
        <h1>Continue Exploring</h1>
        <p>Discover unique destinations and book the best tours with us!</p>
        <a href="#tours" className="btn hero-btn">Explore Tours</a>
      </div>
    </section>
  );
};

export default Hero;
