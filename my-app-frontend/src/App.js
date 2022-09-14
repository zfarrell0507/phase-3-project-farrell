import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './posts/Home';
import Posts from './posts/Posts';
import SingIn from './posts/SignIn';
import { Route, Routes } from 'react-router-dom';

function App() {






  
  return (
    <div className="App">
      <main>
        <NavBar className="container" />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/makes"
            element={<Posts />}
          />
          <Route
            exact
            path="/sign_in"
            element={<SingIn />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
