import React from 'react'

function StepperControl({handelClick,currStep,steps}) {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
       {/* back-button */}
       <button 
       onClick={() => handelClick()}
       className={`text-slate-400 bg-white uppercase py-2 px-4 rounded-xl font-bold cursor-pointer border border-slate-400  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currStep === 1 ? "opacity-50 cursor-not-allowed":""}`}>
         Back
       </button>
       {/* forward-button */}
       <button 
       onClick={() => handelClick("next")}
       className='text-slate-400 bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-bold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>
         {currStep === steps.length-1 ? "Confirm":"Next"}
       </button>
       
    </div>
  )
}

export default StepperControl
