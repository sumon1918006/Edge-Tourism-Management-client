import { useEffect, useState } from "react";
import Card from "./Card";

const TouristSpot = () => {
  const [spots, setSpot] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/touristSpot")
      .then((res) => res.json())
      .then((data) => setSpot(data));
  }, []);

  console.log(spots);

  return (
    <div>
      <div className="card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
        {spots.map(spot => (
          <Card
          key={spot._id}
          allspot={spot}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default TouristSpot;
