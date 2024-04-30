import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const Country = () => {
  const [countrys, setCountrys] = useState([]);

  useEffect(() => {
    fetch("https://b9-a10-tourism-management-server.vercel.app/country")
      .then((res) => res.json())
      .then((data) => setCountrys(data));
  }, []);

  console.log(countrys);

  return (
    <div>
          <h1 className="text-xl mt-5 lg:mt-14 lg:text-5xl text-center font-semibold py-5">
          Countries
      </h1>
      <div className="card-slider-container grid md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 lg:mx-20 border rounded-2xl bg-white lg:bg-[#ebe1e1]">
        {countrys.map((country) => (
          <CountryCard key={country._id} allspot={country}></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Country;
