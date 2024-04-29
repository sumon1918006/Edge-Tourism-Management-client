import Banner from "../Banner/Banner";
import Contract from "../Contract/Contract";
import TouristSpot from "../TouristSpot/TouristSpot";
import Chose from "./Chose/Chose";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="mx-auto text-center mt-10  mb-10 lg:mt- lg:mb-16">
        <h2 className="text-xl lg:text-4xl font-bold">Tourists Spots</h2>
        <p className="text-[12px] md:text-[14px] lg:text-[18px] font-light mb-10">
        South Asia's tourist spots feature diverse landscapes, ancient ruins, vibrant cultures, and <br />culinary delights, promising memorable experiences for travelers.
        </p>
        <TouristSpot></TouristSpot>
        <Chose></Chose>
        <Contract></Contract>
      </div>
    </div>
  );
};

export default Home;
