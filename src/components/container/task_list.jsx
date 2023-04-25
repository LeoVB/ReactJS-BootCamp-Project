import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const Task_listComponent = () => {

    const defaultTask = new Task('Example', 'Default Description', false, LEVELS.NORMAL);

    const changeState = (id) =>{
        console.log("To do: cambiar estado de tarea")
    }

  return (
    <div>

    <div>
        <h1>Your tasks:</h1>
    </div>
        {/* To do: Aplicar un for/map para renderizar una lista */}
        <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  )
}

Task_listComponent.propTypes = {}

export default Task_listComponent