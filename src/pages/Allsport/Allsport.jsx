import { useLoaderData } from "react-router-dom";
import AddSpotCard from "../AddSpotCard/AddSpotCard";

const Allsport = () => {

        const allspot = useLoaderData();

    return (
        <div className=" card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
           {
            allspot.map(spot => <AddSpotCard 
                key={spot._id}
                allspot ={spot}
            ></AddSpotCard>)
           }
        </div>
    );
};

export default Allsport;