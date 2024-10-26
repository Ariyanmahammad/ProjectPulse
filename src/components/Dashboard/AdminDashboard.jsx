import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTaskList from '../other/AllTaskList'
const AdminDashboard = (props) => {
  return (
    <div className='p-20 w-full  bg-[#1C1C1C] h-screen'>
        <Header changeUser={props} />
        <CreateTask />
        <AllTaskList />
    </div>
  )
}

export default AdminDashboard
