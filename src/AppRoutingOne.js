import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/Tasks/TaskPage';
import TaskDetailPage from './pages/Tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRoutingOne() {

  let logged = false


  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials'); // se setean credentias
    console.log('User logged?', logged)
  }, []) // se setea valor cada que hay un cambio, se hizo para que se actualizara rápido, porque local storage dura demasiado en actualizar



  const TaskDetailWrapper = ({ taskList }) => {
    const { id } = useParams();
    const task = taskList.find(task => task.id === Number(id));

    return <TaskDetailPage task={task} />;
  };
  return (
    <Router>
      <div>
        <aside>
          <Link to="/">| HOME |</Link>
          <Link to="/login"> Login |</Link>
          <Link to="/tasks/1"> Task 1 |</Link>
          <Link to="/tasks/2"> Task 2 |</Link>
          <Link to="/about"> About </Link>
          <Link to="/faqs">| FAQs </Link>
          <Link to="/404">| 404 |</Link>
        </aside>
      </div>

      <Routes>
        {/* Acá van las rutas */}
        {/* El orden importa, agarra la primera y si no encuentra, sigue */}
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/onlineState" element={<StatePage />} />
        <Route path='/login' element={logged ? <Homepage /> : <LoginPage />} />
        {/* Se pueden poner las mismas rutas */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<AboutPage />} />
        <Route path="/profile" element={logged ? <ProfilePage /> : <Navigate to="/login" replace />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks/:id" element={<TaskDetailWrapper taskList={taskList} />} />



        {/* Dejar esta al final, por si no se encuentra ninguna */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;
