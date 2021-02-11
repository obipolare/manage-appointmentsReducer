import React from 'react'

const Date = ({pet, owner, date, time, symptoms,id, handleDelete}) => {
    return (
        <>
          <div>
            <p className="py-2 text-lg capitalize"><b>pet:</b><span> { pet }</span></p>
            <p className="py-2 text-lg capitalize"><b>owner:</b><span> { owner }</span></p>
            <p className="py-2 text-lg capitalize"><b>date:</b><span> { date }</span></p>
            <p className="py-2 text-lg capitalize"><b>time:</b><span> { time }</span></p>
            <p className="py-2 text-lg capitalize"><b>symptoms:</b><span> { symptoms }</span></p>
                <button className="w-full px-4 py-2 bg-blue-600 rounded" onClick={()=> handleDelete(id)}>Erase Appointment &times;</button>
          </div>
        
        </>
    )
}

export default Date
