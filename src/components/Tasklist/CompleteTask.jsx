import React from 'react'
import PropTypes from 'prop-types'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-red-400 rounded-xl'>
           <div className='flex justify-between items-center'>
            <h3 className='bg-red-700 text-sm px-3 py-1 rounded-lg'>{data.category}</h3>
            <h4 className='text-gray-800 font-bold text-base'>{data.date}</h4>
           </div>
           <h2 className='text-lg font-medium mt-2'>{data.title}</h2>
           <p className='text-white text-sm mt-2'>{data.description}</p>
           <div className='mt-4'>
            <button className=' bg-green-800 w-full'>
                Completed

            </button>
           </div>
        </div>
  )
}

CompleteTask.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default CompleteTask
