import React from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
const TaskForm = ({ add, length }) => {

  const nameRef = useRef(' ')
  const descriptionRef = useRef(' ')
  const levelRef = useRef(LEVELS.NORMAL)


  function addTask(e) {
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value,
    );
    add(newTask)
  }

  const normalStyle = {
    color: ' blue'
  }

  const urgentStyle = {
    color: ' yellow'
  }

  const blockingStyle = {
    color: ' red'
  }

  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill mt-5'>
        <h4 className='mb-3'>Add task</h4>
        <input ref={nameRef} id='inputName' type='text' placeholder='Task name' className='form-control form-control-lg' required autoFocus />
        <input ref={descriptionRef} id='inputDescription' type='text' placeholder='Description' className='form-control form-control-lg' required />
        <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
          <option style={normalStyle} value={LEVELS.NORMAL}>
            Normal
          </option>
          <option style={urgentStyle}  value={LEVELS.URGENTE}>
            Urgent
          </option>
          <option style={blockingStyle}  value={LEVELS.BLOCKING}>
            Blocking
          </option>
        </select>
        <div className='mt-3'>
          <button type='submit' className='btn btn-success btn-large ms-2'>
            {length > 0 ? 'Add new Task' : 'Create your First Task'}
          </button>
        </div>
      </div>

    </form>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}
export default TaskForm