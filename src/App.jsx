import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import ThemeProvider from './Context/ThemeProvider';
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>
    },
    {
      path: "/about",
      element: <><Navbar /><About /></>
    },
    {
      path: "/profile",
      element: <><Navbar /><Profile /></>
    },
    {
      path: "/project",
      element: <><Navbar /><Project /></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact /></>
    }
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
