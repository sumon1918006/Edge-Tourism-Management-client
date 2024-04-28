import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

import { useLoaderData } from "react-router-dom";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [spots, setSpots] = useState(loadedData);

  const mypost = spots.filter((spot) => spot.uid === user?.uid);
  // console.log(mypost);

  console.log(loadedData);


  //delete spot

  

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>User Name</th>
            <th>Created Spot Name</th>
            <th>Country Name</th>
            <th>Season</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {mypost.map((data) => (
            <tr key={data._id}>
              <th></th>
              <td>{data.user_name}</td>
              <td>{data.name}</td>
              <td>{data.subcategory_name}</td>
              <td>{data.season}</td>
              <td><button className="btn btn-success text-white">Update</button></td>
              <td><button  className="btn btn-error text-white">Delete</button></td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
