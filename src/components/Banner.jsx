import { NavLink } from "react-router-dom";
import bannerImg from "../assets/bannerImg.png"
import { TypeAnimation } from 'react-type-animation';
const Banner = () => {
    return (
        <div>
            <section className="my-6 dark:bg-gray-100 dark:text-gray-800 rounded-2xl">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-3xl font-bold   ">
                            <TypeAnimation
                                sequence={[
                                    'Explore with us',
                                    1500,
                                    'Make it happen',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            /></h1>

                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start my-6">
                            <NavLink to="/listedbooks">
                                <button type="button" className="my-3 text-white text-2xl bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg   px-5 py-2.5 text-center me-2 mb-2">View The List</button>
                            </NavLink>


                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src={bannerImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;