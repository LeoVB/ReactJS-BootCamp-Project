import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.css'
import TaskForm from '../pure/forms/TaskForm';


const Task_listComponent = () => {



  const defaultTask = new Task('Example1', 'Description1', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Description2', false, LEVELS.URGENTE);
  const defaultTask3 = new Task('Example3', 'Description3', false, LEVELS.BLOCKING);

  //Estado del componente
  const [tasks, setTasks] = useState([defaultTask,defaultTask2,defaultTask3])
  const [loading, setLoading] = useState([true])

  //Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task state has been modified')
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount')
    }
  }, [tasks])


  const changeCompleted = (id) => {
    console.log("To do: cambiar estado de tarea")
  }

  return (
    <div>

      <div className='col-12'>

        <div className='card'>
          <div className='card-header p-3'>
            <h5>
              Your tasks:
            </h5>
          </div>
          <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Tittle</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                  {/**Iterar lista de tareas */}
                  {tasks.map((task,index) => {
                    return (
                      <TaskComponent key={index} task={task}></TaskComponent>
                    )
                  })}

                  
              </tbody>
            </table>
          </div>
          <TaskForm></TaskForm>
        </div>




      </div>
    </div>
  )
}

Task_listComponent.propTypes = {}

export default Task_listComponent