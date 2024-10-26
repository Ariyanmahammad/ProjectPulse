import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTaskList = () => {
   const authData = useContext(AuthContext)
   return (
    <div className='p-5 rounded mt-5 flex flex-col items-center'>
      {/* Header Section */}
      <div className='w-[80%] bg-emerald-300 py-2 px-5 rounded-md mb-5 flex justify-between items-center'>
        <h2>
          Employee Name
        </h2>
        <h3>
          New Task
        </h3>
        <h5>
          Active Task
        </h5>
        <h5>
          Completed Task
        </h5>
        <h5>
          Failed Task
        </h5>
      </div>
      
      {/* Employee List */}
      <div className='w-[80%] bg-[#1C1C1C] p-5 flex flex-col items-center'>
        {authData.employees.map((employee, index) => {
          return (
            <div key={index} className='w-full h-[100px] bg-emerald-300 py-2 px-5 rounded-md mb-5 flex justify-between items-center'>
              <h2>
                {employee.firstName}
              </h2>
              <h3>
                {employee.taskNumber.new}
              </h3>
              <h5>
              {employee.taskNumber.active}
              </h5>
              <h5>
              {employee.taskNumber.completed}
              </h5>
              <h5>
              {employee.taskNumber.failed}
              </h5>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllTaskList
