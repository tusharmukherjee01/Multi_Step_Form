import React,{useContext} from 'react'
import { StepperContext } from '../../contexts/Stepperontext'
function Account() {
  const {userData,setUserData} = useContext(StepperContext)

  const handelChange = (e) =>{
    const {name,value} = e.target;
    setUserData({...userData,[name]:value})
  }
  return (
    <div className='flex flex-col'>
      <div className='w-full mx-2 flex-1'>
        <div className='font-bold text-gray-600 text-xs h-6 mt-3 leading-8 uppercase'>
         UserName:
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handelChange}
            value = {userData["userName"] || ""}
            name = "userName"
            placeholder='UserName...'
            className='p-1 px-2 apperance-none outline-none w-ull text-gray-800 rounded-md'
            />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className='font-bold text-gray-600 text-xs h-6 mt-3 leading-8 uppercase'>
         Password:
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
            <input
            onChange={handelChange}
            value = {userData["password"] || ""}
            name = "password"
            placeholder='password...'
            type='password'
            className='p-1 px-2 apperance-none outline-none w-ull text-gray-800 rounded-md'
            />
        </div>
      </div>
    </div>
  )
}

export default Account
