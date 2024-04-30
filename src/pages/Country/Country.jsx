import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  console.log(countrys);

  return (
    <div>
      <div className="card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
        {countrys.map(country => (
          <CountryCard
          key={country._id}
          allspot={country}
          ></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Country;
