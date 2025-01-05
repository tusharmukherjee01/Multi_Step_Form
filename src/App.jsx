import { useState } from 'react'
import './App.css'
import { StepperContext } from './contexts/Stepperontext'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import Account from './components/steps/Account'
import Details from './components/steps/Details'
import Final from './components/steps/Final'
import Payment from './components/steps/Payment'

function App() {
  const [currStep, setCurrStep] = useState(1)

  const [userData,setUserData] = useState('')
  const [finalData,setFinalData]= useState([])
  const steps = ["Account Information","Personal Details","Completed"]

    const displaySteps = (steps) =>{
      switch(steps){
        case 1:
          return <Account/>
        case 2:
          return <Details/>
        case 3:
          return <Final/>
      }
    }

    const handelClick = (direc) => {
      let newStep = currStep;

       direc === "next" ? newStep++:newStep--;

       newStep > 0 && newStep <= steps.length && setCurrStep(newStep)
    }
  return (

    

    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>

      <h1 className='text-center text-blue-500 font-bold text-4xl py-5'>Multi Step Form</h1>
      {/* Stepper */}
      <Stepper 
        currSteps={currStep}
        steps={steps}
      />
       
       <div className='my-10 p-10'>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}>
          {displaySteps(currStep)}
          </StepperContext.Provider>
       </div>

      <div className='container horizontal mt-5 mb-8'>
        { currStep !== steps.length &&
          <StepperControl
          handelClick={handelClick}
          currStep={currStep}
          steps={steps}
          />}
      </div>
    
      
   
    </div>
  )
}

export default App
