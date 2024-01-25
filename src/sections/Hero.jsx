import { btnStyle, headerImage, heroHeader, heroPara } from "../utils/constants";


const Hero = () => {

  return (
    <section className="mb-16">
      <div className="md:mx-16">
        <div className={headerImage}>
          <img loading="lazy" src="{headerImage}" className="w-full h-full object-cover" alt="hero_image" />
        </div>
        <div className="text-center">
        <h1 className={heroHeader}>GIFTS THAT MOVE YOU</h1>
        <p className={heroPara}>This year's gift. Next year's greatness</p>
        <div className="flex justify-center">
          <button className={btnStyle}>Shop</button>
          <button className={btnStyle}>Explore</button>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
