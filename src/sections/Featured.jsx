
import { btnStyle, feaGal1, feaGal2, flexImageDivStyle } from '../utils/constants';

const Featured = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
      <div>
        <div>
          <h2 className="text-2xl font-medium mb-5">Featured</h2>
        </div>
        <div className='flex mb-10 justify-center'>
            <div className={`${flexImageDivStyle} relative`}>
                <img loading='lazy' className='w-full h-full object-cover' src={feaGal1} alt="lady_sat" />
                <div className='absolute top-5 lg:bottom-10 font-bold  left-10'>
                    <p className='mb-3'>Own the floor</p>
                    <p className='text-xl mb-5'>Phoenix Fleece Styles <br/> Fit for the Spotlight</p>
                    <button className={btnStyle}>Shop Now</button>
                </div>
            </div>
            <div className={`${flexImageDivStyle} relative hidden md:block `}>
                <img loading='lazy' className='w-full h-full object-cover' src={feaGal2} alt="shoes_atGlance" />
                <div className='absolute bottom-[40px] left-10 font-bold'>
                    <p className='mb-3'>Nice Dunk</p>
                    <p className='mb-5 text-xl'>Unapolegetically Original</p>
                    <button className={btnStyle}>Shop Now</button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Featured