import React,{useState} from 'react'
import {v4 as uuid} from 'uuid'
const Form = ({dispatch}) => {

  const [inputValue, setInputValue] = useState({
    pet:'',
    owner: '',
    date:'',
    time:'',
    symptoms: '',
  })

  const [error, setError] = useState(false)
  
  const {pet, owner, date, time, symptoms} = inputValue

  const handleInputChange= ({target:{name, value}}) => {
    setInputValue({
      ...inputValue,
      [name] : value
    })
    
  }
  const handleSubmit = (e) => {
    e.preventDefault()
      if(pet.trim().length === 0 ||
        owner.trim().length === 0 ||
        date.trim().length === 0 ||
        time.trim().length === 0 ||
        symptoms.trim().length === 0  )
      return setError(true)
      
    setError(false)
    const newDate = {
      ...inputValue,
      id: uuid(),
    }

    dispatch({
      type:'add',
      payload: newDate,
    })

      setInputValue({
      pet:'',
      owner: '',
      date:'',
      time:'',
      symptoms: '',
    })

  }

  return (
    <fieldset className="p-4">
     {error && <h2 className="py-2 text-2xl font-bold text-center bg-red-500 rounded">You need to write the inputs please!</h2>}
      <legend className="text-4xl font-bold">ADD Date</legend>
      <form onSubmit={handleSubmit} className="">
        <label className="block py-2 text-xl" htmlFor="pet">Pet's name</label>
        <input 
        className="w-full px-4 py-2 bg-gray-800 text-md"
        type="text" id="pet"
        name="pet"
        value={pet}
        onChange={handleInputChange}
        />
        

        <label className="block py-2 text-xl" htmlFor="pet">Owner's name</label>
        <input 
        className="w-full px-4 py-2 bg-gray-800 text-md"
        type="text" id="owner"
        name="owner"
        value={owner}
        onChange={handleInputChange}
        />

        <label className="block py-2 text-xl" htmlFor="date">Date</label>
        <input 
        className="w-full px-4 py-2 bg-gray-800 text-md"
        type="date" id="date"
        name="date"
        value={date}
        onChange={handleInputChange}
        />

        <label className="block py-2 text-xl" htmlFor="time">What time?</label>
        <input 
        className="w-full px-4 py-2 bg-gray-800 text-md"
        type="time" id="time"
        name="time"
        value={time}
        onChange={handleInputChange}
        />

        <label className="block py-2 text-xl" htmlFor="symptoms">Symptoms</label>
        <textarea className="w-full h-20 px-4 py-2 bg-gray-800 resize-none text-md" id="symptoms" cols="30" rows="10"
        name="symptoms"
        value={symptoms}
        onChange={handleInputChange}
        ></textarea>
        <button className="w-full px-4 py-2 bg-green-700 rounded " type="submit">Send info!</button>
      </form>
    </fieldset>
  )
}

export default Form
