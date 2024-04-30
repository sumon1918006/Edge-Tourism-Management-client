import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import { Typewriter } from "react-simple-typewriter";

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
          <h1 className="text-xl mt-5 bg-white lg:mt-14 lg:text-5xl text-center font-semibold py-5">
          Countries
          {/* new packege style apply */}
          <div className='App'>
                <h1 style={{ textAlign: 'center', paddingTop: '', margin: 'auto 0', fontWeight: 'normal', paddingBottom: '20px' }}>
                    {' '}
                    <span style={{ fontSize: '32px', color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={[
                                'Bangladesh',
                                'Thailand',
                                'Indonesia',
                                'Malaysia',
                                'Vietnam',
                                'Cambodia'
                            ]}
                            loop={1000}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
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
