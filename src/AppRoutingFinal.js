import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams } from 'react-router-dom';
import NotFoundPage from './pages/404/NotFoundPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';


function AppRoutingFinal() {

  let loggedIn = true;

  return (
    <div>
      <Router>
        {/**Route switch */}
        <Routes>
          {/**REdirections to protect our route */}
          <Route exact path='' from="/" Component={loggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />

          {/**Login route */}
          <Route exact path="/login" Component={LoginPage} />
          {/**Dashboard route */}
          <Route exact path="/dashboard" Component={loggedIn ? <DashBoardPage /> : <Navigate to="/login" />} />
          {/**Register route */}
          <Route path='/register' Component={RegisterPage}/>
          <Route element={NotFoundPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutingFinal;
