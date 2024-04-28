import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [spots, setSpots] = useState(loadedData);

  const mypost = spots.filter((spot) => spot.uid === user?.uid);
  // console.log(mypost);

//   console.log(loadedData);


  //delete spot
  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`http://localhost:5000/addspot/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Created Spot has been deleted.',
                            'success'
                        )
                        const remaining = spots.filter(spot => spot._id !== _id);
                        setSpots(remaining);
                    }
                })

        }
    })
}


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
          { 
          mypost.map((data) => (
            <tr key={data._id}>
              <th></th>
              <td>{data.user_name}</td>
              <td>{data.name}</td>
              <td>{data.subcategory_name}</td>
              <td>{data.season}</td>
              <td><button className="btn btn-success text-white">Update</button></td>
              <td><button  onClick={() => handleDelete(data._id)}  className="btn btn-error text-white">Delete</button></td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
