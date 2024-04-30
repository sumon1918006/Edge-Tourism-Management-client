import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

import { Link, useLoaderData } from "react-router-dom";
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
         <h1 className='bg-slate-300 text-center pt-4 lg:pt-7 h-[70px] lg:h-[100px] text-xl lg:text-3xl font-bold'>
                My Tourists Spot List</h1>
                {mypost.length>0?
      <div className="">
        <table className="table ">
        {/* head */}
        <thead>
          <tr>
           
            <th className="lg:text-xl">User Name</th>
            <th className="lg:text-xl">Created Spot Name</th>
            <th className="lg:text-xl">Country Name</th>
            <th className="lg:text-xl">Season</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          { 
          mypost.map((data) => (
            <tr key={data._id}>
              
              <td className="lg:text-[16px]">{data.user_name}</td>
              <td className="lg:text-[16px]">{data.name}</td>
              <td className="lg:text-[16px]">{data.subcategory_name}</td>
              <td className="lg:text-[16px]">{data.season}</td>
              <td><Link to={`/update/${data._id}`}><button className="btn btn-success text-white">Update</button> </Link></td>
              <td><button  onClick={() => handleDelete(data._id)}  className="btn btn-error text-white">Delete</button></td>
              
             
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      :
      <div className="mt-20 text-center mb-5 bg-cyan-300 space-y-5 rounded-xl border py-10 w-[550px] mx-auto">
      <h1 className="text-5xl font-semibold">No spot you add ...</h1>
      <p className="text-2xl font-medium">Please add an Spot</p>
      <Link to='/add'> <button className="text-white mt-5 text-lg btn btn-success">Add Now</button></Link>

  </div>
}
    </div>
  );
};

export default MyList;
