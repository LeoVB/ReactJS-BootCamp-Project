import React, { useEffect,useState } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.css'
import { LEVELS } from '../../models/levels.enum'
import Toggle from '../../Buttons'


const TaskComponent = ({ task, complete, deleteT, toggleT }) => {

  useEffect(() => {
    console.log('Task created')

    return () => {
      console.log(`Task: ${task.name} is going to unmouunt`)
    }
  }, [task])

 
  /**Funcion que retorna un badge
   * dependiendo del nivel de la task
   */
  function taskLevelBadge() {

    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h5 className='mb-0'>
            <span className='badge bg-primary'>
              {task.level}
            </span>
          </h5>
        )

      case LEVELS.URGENTE:
        return (
          <h5 className='mb-0'>
            <span className='badge bg-warning'>
              {task.level}
            </span>
          </h5>
        )

      case LEVELS.BLOCKING:
        return (
          <h5 className='mb-0'>
            <span className='badge bg-danger'>
              {task.level}
            </span>
          </h5>
        )

      default:

        break;
    }

  }


  /** funcion que retorna el icono según el estado de completacion de la tarea */
  function taskCompletedIcon() {
    // return task.completed ?
    //     (<i onClick={ ()=> complete(task)} className='bi-toggle-on task-action' style={{ color: 'green' }}></i>)
    //      :
    //      (<i onClick={() => complete(task)} className='bi-toggle-off task-action' style={{ color: 'red' }}></i>)
    
  }


  return (
    <tr className='fw-normal'>
      <td>
        <span className='ms-2'>{task.name}</span>
      </td>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>
        {/**Ejecuta funcion que genera elemnto badge  */}
        {taskLevelBadge()}
      </td>
      <td className='align-middle iconsFlex'>
        {/**TO DO: sustituir por iconos */}
        {/* {task.completed ?
          (<i className='bi-toggle-on' style={{ color: 'green' }}></i>) : (<i className='bi-toggle-off' style={{ color: 'red' }}></i>)
        } */}

        {/* {taskCompletedIcon()} */}
        {/* <Toggle toggled={toggled} onClick={handleClick(); ()=> complete(task)}></Toggle> */}
        <span className='mx-1 mt-1'>
        <Toggle toggled={task.completed} onClick={() => { toggleT(task); complete(task); }}></Toggle>
        </span>
        
       <div> <i onClick={() => deleteT(task)} className='bi-trash task-action' style={{ color: 'red' }}></i></div>
      </td>

    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,  //reviusa que se reciba una Task
  complete: PropTypes.func.isRequired,
  deleteT: PropTypes.func.isRequired,
  toggleT: PropTypes.func.isRequired
}

export default TaskComponent