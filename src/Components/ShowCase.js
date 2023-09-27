import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ShowCase = () => {
  return (
    <div className='flex justify-center items-center py-2 shadow-xl max-h-32'>
        <div className="w-3/4 flex flex-col justify-between">
        {/* Upper items */}
        <div className='flex w-1/6 justify-around text-gray-600 mt-2'>
            <span>Orders</span>
            <FontAwesomeIcon className='mt-1' icon={faChevronRight} />
            <span className='font-light underline'>Order 32457ABC</span>
        </div>

        {/* Below items */}
        <div className='flex justify-between mt-8 items-center'>
            <h1 className='text-2xl font-bold'>Order 32457ABC</h1>
            <div>
                <button className='rounded-full border-green-900 border-solid border-2 text-green-900 p-2 h-10 w-20 mx-2 text-sm'>Back</button>
                <button className='rounded-full bg-green-900 text-white p-2 w-32 mx-2 text-sm h-10'>Approve Order</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShowCase