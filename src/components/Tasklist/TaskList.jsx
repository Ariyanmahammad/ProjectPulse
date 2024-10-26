import React from 'react'
import PropTypes from 'prop-types'
import AcceptedTask from './AcceptedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'



const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id='task-list' className='h-[55%] overflow-x-auto flex justify-start items-center gap-5 mt-10 py-5 px-10 w-full rounded-lg flex-nowrap'>
       {data.tasks.map((elem,idx)=>{
        if(elem.active){
          return <AcceptedTask key={idx} data={elem} />
        }
        if(elem.new){
          return <NewTask key={idx} data={elem} />
        }
        if(elem.completed){
          return <CompleteTask key={idx} data={elem} />
        }
        if(elem.failed){
          return <FailedTask key={idx} data={elem} />
        }
        
       })}
        
       
    </div>
  )
}

TaskList.propTypes = {
  data: PropTypes.shape({
    tasks: PropTypes.array.isRequired
  }).isRequired
}

export default TaskList
