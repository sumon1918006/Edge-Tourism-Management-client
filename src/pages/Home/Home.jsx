import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import Country from "../Country/Country";
import TouristSpot from "../TouristSpot/TouristSpot";
import Chose from "./Chose/Chose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto text-center mt-10 bg-white  mb-10 lg:mt- lg:mb-16">
        <h2 className="text-xl lg:text-4xl font-bold">Tourists Spots</h2>
        <p className="text-[12px] md:text-[14px] lg:text-[18px] font-light mb-10">
        South Asia's tourist spots feature diverse landscapes, ancient ruins, vibrant cultures, and <br />culinary delights, promising memorable experiences for travelers.
        </p>
        </div>
        <TouristSpot></TouristSpot>
        <Country></Country>
        <Chose></Chose>
        <Contract></Contract>
     
    </div>
  );
};

export default Home;
