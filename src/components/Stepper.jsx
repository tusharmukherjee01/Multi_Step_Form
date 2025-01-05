import React, { useEffect, useRef, useState } from 'react'


function Stepper({steps,currSteps}) {
const [newStep,setNewStep] = useState([])

// console.log(newStep, Array.isArray(newStep)) // =====>>>>
const stepRef = useRef()

 const updateSteps = (stepNumber,steps)=>{
    const newSteps = [...steps]
    let cnt=0;

    while(cnt < newStep.length){
      //currState
      if(cnt == stepNumber){
        newSteps[cnt] = {
          ...newSteps[cnt],
          highlighted:true,
          selected:true,
          completed:true
        }
        cnt++;
      }
      //stepcomplete
      else if(cnt < stepNumber){
         newSteps[cnt] = {
          ...newSteps[cnt],
          highlighted:false,
          selected:true,
          completed:true
        }
        cnt++;
      }
      //step pending
      else{
       newSteps[cnt] = {
          ...newSteps[cnt],
          highlighted:false,
          selected:false,
          completed:false
        }
        cnt++;
      }
    }
    return newSteps;
 }
  useEffect(() => {
    //create object

    const stepsState = steps.map((step,i)=>
    Object.assign({},{
      description:step,
      completed:false,
      highlighted:i === 0 ? true : false,
      selected:i === 0 ? true : false
    })
    );

    stepRef.current = stepsState;
    const current = updateSteps(currSteps-1,stepRef.current)
    setNewStep(current)
  },[steps,currSteps])


    const displaySteps = newStep.map((step,ind)=>{
    return  (
    <div key={ind} className={ind !== newStep.length-1 ? 'w-full flex items-center' : 'flex items-center'}>
        <div className='relative flex items-col items-center text-teal-500'>
        <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3  ${step.selected ? 'bg-green-600 text-white border-teal-500' : ''}`}>
          {step.completed ? (<span className='text-white-600 text-lg font-medium'>	
✓</span>
        ):(ind+1)}</div>
        <div className={`absolute top-0 text-center mt-16 w-5 text-xs  font-small uppercase ${step.highlighted ? 'text-gray-900' : 'text-gray-400'}`}>{step.description}</div>
     </div>
      <div className={`flex-auto border-t-2 transition duration-500 ease-in-out ${step.completed ? 'border-green-600' : 'border-gray-300'}`}></div>
    </div>
)
})

  return (
   <div className='mx-4 p-4 flex justify-between item-center '>
     {displaySteps}
   </div>
  )
}

export default Stepper
