import { btnStyle, flexImageDivStyle, heroHeader, heroPara, max1Img, max2Img, maxPara, subHeadingStyle } from "../utils/constants";
const Max = () => {  
  return (
    <section className="flex flex-col justify-center items-center mb-24">
      <div>
        <h2 className={subHeadingStyle}>The Latest</h2>
        <div className="flex mb-10 justify-center ">
          <div className={flexImageDivStyle}>
            <img
              src={`${max1Img}`}
              className="w-full h-full object-cover md:border-r-2 md:border-black"
              alt="max_1_image"
              loading="lazy"
            />
          </div>
          <div className="hidden lg:block">
            <div className={flexImageDivStyle}>
              <img
                src={max2Img}
                className="w-full h-full object-cover"
                alt="max_2_image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="font-medium ">Air Max Pulse Roam</p>
          <h1 className={heroHeader}>ROAM ENDLESSLY</h1>
          <p className={heroPara}>{maxPara}</p>
          <button className={btnStyle}>Shop now</button>
        </div>
      </div>
    </section>
  );
}

export default Max