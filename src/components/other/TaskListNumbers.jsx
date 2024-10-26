import React from 'react'
import PropTypes from 'prop-types'


const TaskListNumbers = ({data}) => {
  return (
    <div className='flex m-10 screen justify-between gap-5'>
        <div className=' w-[45%] px-10 py-5 bg-red-400 rounded-lg '>
            <h2 className='text-white text-2xl font-bold'>{data.taskNumber.new}</h2>
            <h3 className='text-white text-lg font-medium'>New Tasks</h3>
        </div>
        <div className=' w-[45%] px-10 py-5 bg-yellow-400 rounded-lg '>
            <h2 className='text-white text-2xl font-bold'>{data.taskNumber.completed}</h2>
            <h3 className='text-white text-lg font-medium'>completed tasks</h3>
        </div>
        <div className=' w-[45%] px-10 py-5 bg-green-400 rounded-lg '>
            <h2 className='text-white text-2xl font-bold'>{data.taskNumber.active}</h2>
            <h3 className='text-white text-lg font-medium'>Accepted tasks</h3>
        </div>
        <div className=' w-[45%] px-10 py-5 bg-blue-400 rounded-lg '>
            <h2 className='text-white text-2xl font-bold'>{data.taskNumber.failed}</h2>
            <h3 className='text-white text-lg font-medium'>Failed tasks</h3>
        </div>
        
    </div>
  )
}

// Add PropTypes validation
TaskListNumbers.propTypes = {
  data: PropTypes.shape({
    taskNumber: PropTypes.shape({
      new: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired,
      active: PropTypes.number.isRequired,
      failed: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default TaskListNumbers
