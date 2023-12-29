import { btnStyle, flexImageDivStyle, headerImage, heroHeader, unlImg } from "../utils/constants";

const Unlimited = () => {
  return (
    <div className="md:px-16 px-7 my-16">
      <div className={headerImage}>
        <img src={unlImg} loading="lazy" className="w-full h-full object-cover md:object-bottom" alt="people_having_fun" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className={heroHeader}>UNLIMITED PANT</h2>
        <p className="mb-2">Make it everyday larger </p>
        <button className={btnStyle}>Shop</button>
      </div>
    </div>
  );
}

export default Unlimited