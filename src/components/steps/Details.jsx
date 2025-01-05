
import React,{useContext} from 'react'
import { StepperContext } from '../../contexts/Stepperontext'
function Details() {
   const {userData,setUserData} = useContext(StepperContext)

  const handelChange = (e) =>{
    const {name,value} = e.target;
    setUserData({...userData,[name]:value})
  }
  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold text-gray-600 text-xs h-6 mt-3 leading-8 uppercase'>
         Address:
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handelChange}
            value = {userData["address"] || ""}
            name = "address"
            placeholder='Address...'
            className='p-1 px-2 apperance-none outline-none w-ull text-gray-800 rounded-md'
            />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold text-gray-600 text-xs h-6 mt-3 leading-8 uppercase'>
         City:
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handelChange}
            value = {userData["city"] || ""}
            name = "city"
            placeholder='City Name...'
            type='text'
            className='p-1 px-2 apperance-none outline-none w-ull text-gray-800 rounded-md'
            />
        </div>
      </div>
    </div>
  )
}


export default Details
