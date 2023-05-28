import React from 'react';
import { useParams } from 'react-router-dom';

const TaskDetailPage = ({ task }) => {


  return (
    <div>
      <h1>Task Detail - {task.id}</h1>
      {task ? (
        <>
          <h2>{task.name}</h2>
          <h2>{task.description}</h2>
        </>
      ) : (
        <h2>Task not found</h2>
      )}
    </div>
  );
};

export default TaskDetailPage;
