import { useSelector } from 'react-redux'
import './heroSection.css'
import { getHero } from '../../features/HeroSlice';
import { useEffect } from 'react';



const HeroSection = () => {

    const getHeroData = useSelector(getHero);

    useEffect(() => {
        console.log(getHeroData);
    }, [getHeroData])

    return (

        <div>
            <div className="flex flex-col md:flex-row h-screen">
                <div className="left  w-full lg:w-1/2 flex justify-center items-center order-2 md:order-1 ">
                    <div className="text-wrap  py-30 md:py-0  md:h-[70%] pl-10 justify-center items-center flex">
                        <div>
                            <span className='text-3xl md:text-5xl'>
                                {getHeroData.first_title} I'm
                            </span>
                            <span className='text-4xl md:text-5xl'>
                                {" "}   {getHeroData.name}
                            </span>
                            <div className="who-i-am w-9/10  my-5">
                                <p className='text-xl md:text-2xl'>
                                    {getHeroData.who_i_am}
                                </p>
                            </div>
                            <div class="btn">
                                <button className="dark-theme text-netural-500 py-1 px-3 mr-2 rounded-md">
                                    Some Button
                                </button>
                                <button className="theme text-netural-500  py-1 px-3 rounded-md">
                                    Some Button 2
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------- */}
                <div className="right w-full lg:w-1/2 order-1 md:order-2 flex justify-center items-center">
                    <div className="text-white text-4xl font-bold pt-20 md:py-0 md:h-[70%] flex justify-center items-center">
                        <img className='hero-img w-6/7' src={`https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg`} alt="" />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroSection