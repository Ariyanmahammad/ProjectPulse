import React, { useState } from 'react'

const CreateTask = () => {
  
const [taskTitle, settaskTitle] = useState('')
const [taskDescription, settaskDescription] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')


const [NewTask, setNewTask] = useState([])

const submitHandler=(e)=>{
  e.preventDefault();
 
  //   const newTask = { 
  //   title: taskTitle, 
  //   category, 
  //   assignTo, 
  //   description: taskDescription, 
  //   date: taskDate, 
  //   active: false, 
  //   newTask: true, 
  //   failed: false, 
  //   completed: false 
  // };
  // settask(newTask); // Update the state with the new task
  // console.log(newTask); // Log the new task object
  setNewTask({ title: taskTitle, category,  description: taskDescription, date: taskDate, active: false, newTask: true, failed: false, completed: false })
  console.log(NewTask);

  const data =JSON.parse (localStorage.getItem('employees'))
  
  data.forEach(function(elem){
   if(assignTo==elem.firstName){
    elem.tasks.push(NewTask);
    elem.taskNumber.new=elem.taskNumber.new+1
    
    
    
   }
    

  })
localStorage.setItem('employees',JSON.stringify(data))

  setAssignTo('')
  settaskTitle('')
  settaskDescription('')
  setCategory('')
  setTaskDate('')

  
  
 

}

  return (
    <div className='w-full flex justify-center items-center'>
            <form onSubmit={(e)=>{
              submitHandler(e)
            }}
             className='w-[50%] bg-gray-800 p-10 rounded-md mb-10'>
              <div>
                  <h3 className='text-white text-2xl font-bold'>Task Title </h3>
                  <input
                  value={taskTitle}
                  onChange={(e)=>{
                    settaskTitle(e.target.value)
                  }}
                  type="text" placeholder='Make a UI design' className='w-full p-2 rounded-md mt-2 text-black' />
              </div>
              <div>
                <h3 className='text-white text-2xl font-bold'>Description</h3>
                <textarea 
                  value={taskDescription}
                  onChange={(e) => settaskDescription(e.target.value)}
                  name="" 
                  id="" 
                  cols="30" 
                  rows="10" 
                  placeholder='Task Description' 
                  className='w-full p-2 rounded-md mt-2 text-black'
                ></textarea>
              </div>
              <div>
                <h3 className='text-white text-2xl font-bold'>Date</h3>
                <input 
                  type="date" 
                  value={taskDate}
                  onChange={(e) => setTaskDate(e.target.value)}
                  className='w-full p-2 rounded-md mt-2 text-black' 
                />
              </div>
              
                <div>
                <h3 className='text-white text-2xl font-bold'>Assign To</h3>
                <input 
                  type="text" 
                  placeholder='Employee Name' 
                  className='w-full p-2 rounded-md mt-2 text-black'
                  value={assignTo}
                  onChange={(e) => setAssignTo(e.target.value)}
                />
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold'>Category</h3>
                    <input 
                      type="text" 
                      placeholder='Design/Development/Marketing/etc.' 
                      className='w-full p-2 rounded-md mt-2 text-black'
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
        
                <button className='bg-red-600 mt-5 mb-5 text-white px-4 py-2 rounded-md'>Create Task</button>
            </form>
        </div>
   
  )
}

export default CreateTask
