// import React, { useEffect, useState } from 'react'
// import { API } from '../config'
// import { getActivities } from "../api/Act";

// const AdminCategory = () => {

    
//   let [activities, setActivities] = useState([])

//   useEffect(() => {
//     getActivities()
//     .then( (data)=> {
//       if (data?.error){
//         console.log(data.error)
//       }
//       else{
//         console.log(data)
//         setActivities(data.reverse())
        
//       }
//     }
//     )
    
//   },[])
//   return (
//     <div>
//       <h1 className='font-bold text-5xl ps-11 py-12'>POPULAR</h1>
//       {
//         activities?.length > 0 && 
//       activities.map((ac) => {
// return(
     
//       <div key={ac._id}>
//         <h1 className='font-bold w-1/5'>{ac.category_name}</h1>
//         <img src={`${API}/${ac.image}`}alt="" />
//         {/* <h1 className='font-bold w-1/5'>{ac.description}</h1> */}
// <hr/>
//       </div>
// )
//        })}
//     </div>
//   )
// }
  

// export default AdminCategory




import React, { useEffect, useState } from 'react';
import { API } from '../config';
import { getActivities } from '../api/Act';

const AdminCategory = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities().then(data => {
      if (data?.error) {
        console.log(data.error);
      } else {
        console.log(data);
        setActivities(data.reverse());
      }
    });
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">CATEGORY</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.length > 0 &&
          activities.map(ac => (
            <div key={ac._id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={`${API}/${ac.image}`} alt="" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{ac.category_name}</h2>
                {/* <p className="text-gray-700">{ac.description}</p> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AdminCategory;
