import { btnStyle, heroHeader, heroPara, subHeadingStyle, zion } from "../utils/constants"



const Zion = () => {
  return (
    <div className="md:mx-16 mx-7 mb-16">
        <h2 className={subHeadingStyle}>Just in</h2>
        <div className='h-[400px] md:h-[600px] md:mb-10 mb-7' >
            <img src={zion} loading="lazy" className="w-full h-full object-cover" alt="zio_img" />
        </div>
        <div className="flex flex-col justify-center items-center">
            <p className={heroPara}>'Mud, Sweat & Tears'</p>
            <h1 className={heroHeader}>ZION 3</h1>
            <p className={heroPara}>Zion set his sights on the sky and put in the work to get there.<br/> Mud,Sweat & Tears were his fuel to take the flight-now make them your own.</p>
            <button className={btnStyle}>Shop</button>
        </div>
    </div>
  )
}

export default Zion