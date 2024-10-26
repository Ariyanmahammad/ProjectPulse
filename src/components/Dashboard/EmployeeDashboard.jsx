import React from 'react'
import PropTypes from 'prop-types'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div>
        <div className='p-20 bg-[#1C1C1C] h-screen'>
            <Header changeUser={props.changeUser} data={props.data} />
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
    </div>
  )
}

EmployeeDashboard.propTypes = {
  data: PropTypes.object.isRequired,
  changeUser: PropTypes.func.isRequired,
}

export default EmployeeDashboard
