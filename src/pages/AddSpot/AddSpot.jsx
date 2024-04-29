import { useContext, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";


  

const AddSpot = () => {
    useEffect(() => {
        document.title = 'Add Tourist Spot';
    }, []);

    const {user} = useContext(AuthContext);
    const uid = user?.uid;
    console.log("this is uid:",uid);

    const handleAddSpot = event =>{
        event.preventDefault();

        const form = event.target;
        const name = form.spot_name.value;
        const image = form.image.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const visitor = form.visitor.value;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const subcategory_name = form.subcategory_name.value;
        const season = form.season.value;
        const time = form.time.value;
        const short_description = form.short_description.value;

        const addNewSpot =  {name, image, location, cost, visitor, user_name, user_email, subcategory_name, season, time, short_description,uid};
        console.log(addNewSpot);
    


     // send data to the server
     fetch('http://localhost:5000/addspot', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(addNewSpot)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  });
                  form.reset();
            }
        })
    }


    return (
        <div className="pb-14">
            <form onSubmit={handleAddSpot} className="mx-auto my-10 w-[800px] bg-gray-100 rounded-lg shadow-lg p-6">

                <h1 className="flex items-center gap-3 text-2xl pb-2 font-bold border-b border-[#958d8d]">
                <FaMapLocationDot /> <span>Tourists Spot Information</span></h1>

                {/* Row 1 */}
                <div className="flex gap-5 mt-4">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Tourists Spot Name</p>
                        <input name="spot_name" type="text" placeholder="Enter tourists spot name" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold pb-1">Country Name</p>
                        <select name="subcategory_name" className="p-1 w-full border input-info rounded-lg">
                            <option disabled selected>Select Country_Name</option>
                            <option>Bangladesh</option>
                            <option> Thailand</option>
                            <option>Indonesia</option>
                            <option>Malaysia</option>
                            <option>Vietnam</option>
                            <option>Cambodia</option>
                        </select>
                    </div>
                    
                </div>

                {/* Row 2 */}
                <div className="flex gap-5 mt-4 border-b border-[#958d8d] pb-8">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Photo URL</p>
                        <input name="image" type="text" placeholder="Enter image url" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                   
                    <div className="w-full">
                        <p className="font-semibold pb-1">Location</p>
                        <input name="location" type="text" placeholder="Enter location name" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex gap-5 pt-5">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Seasonality</p>
                        <select  name="season" className="p-1 w-full border input-info rounded-lg">
                            <option disabled selected>Select Season</option>
                            <option>Winter</option>
                            <option>Spring</option>
                            <option>Summer</option>
                            <option>Monsoon</option>
                            <option>Autumn</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <p className="font-semibold pb-1"> Travel Time</p>
                        <select name="time" className="p-1 w-full border input-info rounded-lg">
                            <option disabled selected>Select Days</option>
                            <option>3 Days</option>
                            <option>7 Days</option>
                            <option>15 Days</option>
                            <option>30 Days</option>
                            

                        </select>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="flex gap-5 pt-5 border-b border-[#958d8d] pb-8">
                    <div className="w-full">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Average cost</p>
                        <input name="cost" type="text" placeholder="$0.00" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                    </div>

                    <div className="w-full">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Total Visitors PerYear</p>
                        <input name="visitor" type="text" placeholder="1000" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                    </div>
                </div>

                {/* Row 5 */}
                <div className="mt-5">
                    <p className="font-semibold pb-2">Short description</p>
                    <textarea name="short_description" className="w-full border input-info rounded-lg" placeholder="Write here" rows="5"></textarea>
                </div>

                <h1 className="flex mt-8 items-center gap-3 text-2xl pb-2 font-bold border-b border-[#958d8d]">
                    <FaUserCircle /> <span>User Information</span></h1>

                {/* Row 1,1*/}
                <div className="flex gap-5 mt-4">
                    <div className="w-full">
                        <p className="font-semibold pb-1">User Name</p>
                        <input name="user_name" type="text" placeholder="Enter your name" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold pb-1">Email</p>
                        <input name="user_email" type="text" placeholder="Enter your Email" className="p-1 w-full border input-info rounded-lg" />
                    </div>
                </div>

                <div className="text-center mt-10 mb-4">
                    <input className="btn btn-success text-white px-6" type="submit" name="" id="" value='Add Item' />
                </div>

            </form>
        </div>
    );
};

export default AddSpot;