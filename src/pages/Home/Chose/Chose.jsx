import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Chose = () => {
    return (
        <div className="my-24 flex flex-col bg-white lg:flex-row rounded-2xl gap-4 lg:gap-12 mx-2 lg:mx-32 p-3 lg:p-8 shadow-2xl border border-[#cbbcbc] lg:my-32" >

            <div data-aos="fade-down-right" data-aos-duration="1000">
                <img className="w-full h-[400px] lg:h-[630px] lg:w-[650px] rounded-2xl" src="https://i.ibb.co/DYq7LJh/sebastian-leon-prado-Mg-ODFm-LOa-EY-unsplash.jpg" alt="" />
            </div>

            <div data-aos="fade-down-left" data-aos-duration="1000" className="px-5 mb-10 lg:mb-0">
                <h1 className="ml-5 lg:ml-0 text-xl lg:text-3xl mt-5 font-bold lg:leading-[45px]"> Why Choose Us !  </h1>

                <div className="flex gap-6 mt-6 lg:mt-12">  
                    <img className="w-16 h-16 lg:h-20 lg:w-20" src="https://i.ibb.co/18hvwtL/111.png" alt="" />
                    <div className='text-start'>
                        <h1 className="text-[16px]   lg:text-xl font-semibold">Exceptional Service</h1>
                        <p>Personalized care, 24/7 support, ensuring comfort and satisfaction for a memorable stay.</p>
                    </div>
                </div>

                <div className="flex gap-6 mt-6">
                    <img className="w-16 h-16 lg:h-20 lg:w-20" src="https://i.ibb.co/1GmgWgc/smart.png" alt="" />
                    <div className='text-start'>
                        <h1 className=" text-[16px] lg:text-xl font-semibold">Distinctive Amenities</h1>
                        <p>Luxurious spa, gourmet dining, and unique themed rooms for an unforgettable and enriching experience.</p>
                    </div>
                </div>

                <div className="flex gap-6 mt-6">
                    <img className="w-16 h-16 lg:h-20 lg:w-20" src="https://i.ibb.co/VVSKc5g/effort.png" alt="" />
                    <div className='text-start'>
                        <h1 className=" text-[16px] lg:text-xl font-semibold">Local Expertise and Authenticity</h1>
                        <p>Insider tips, cultural experiences, and community connections for an authentic immersion in the destination.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Chose;