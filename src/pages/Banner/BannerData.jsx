import { MdKeyboardArrowDown } from "react-icons/md";

const BannerData = () => {
    return (

        <div className='top-20 lg:top-[360px] right-1/4  lg:left-72 absolute'>
           <div className="">
           <h1 className='text-[20px] lg:text-4xl font-bold text-white'><span className=" text-[20px] lg:text-4xl lg:px-0">Explore The</span> <span className=' lg:px-0 text-[yellow]'>World</span> Today With Revily Travel</h1>
           </div>
            <p className='text-white text-[22px] text-base font-medium pt-2 pb-5 hidden lg:block'>Explore Envision , and Make it Yours! Start Your Journey Now.</p>

            <div className='space-y-1 hidden lg:block'>
                


                <div className='bg-[#eeecec] rounded-xl flex justify-between p-6 lg:w-[950px]'>

                    <div className='border-r-4 rounded border-[#1a1212] pr-12'>
                        
                        <h1 className='font-bold'>Location</h1>
                        <p className='text-base flex items-center gap-2'><span>Select your Location</span> <MdKeyboardArrowDown className='text-xl' /></p>
                    </div>

                    <div className='border-r-4 rounded border-[#1a1212] pr-12'>
                        <h1 className='font-bold'>Package</h1>
                        <p className='text-base flex items-center gap-2'><span>Please Select Package</span> <MdKeyboardArrowDown className='text-xl' /></p>
                    </div>

                    <div className='border-r-4 rounded border-[#1a1212] pr-12'>
                        <h1 className='font-bold'>Hotel</h1>
                        <p className='text-base flex items-center gap-2'><span>Choose Your Hotel</span> <MdKeyboardArrowDown className='text-xl' /></p>
                    </div>

                    <button className='px-8 btn btn-success text-white hover:btn-primary hover:text-white'>Search</button>

                </div>
            </div>

        </div>
    );
};

export default BannerData;