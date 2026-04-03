import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Params from "./Components/Params";
import Courses from "./Components/Courses";
import MockTest from "./Components/MockTest";
import Result from "./Components/Result";
import NotFound from "./Components/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <div>
          <Navbar />
          <Home />
        </div>
      
    },
    {
      path: "/about",
      element: 
        <div>
          <Navbar />
          <About />
        </div>
      
    },
    {
      path: "dashboard",
      element: 
        <div>
          <Navbar />
          <Dashboard />
        </div>,
      
      children: [  
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "mock-test",
          element: <MockTest />,
        },
        {
          path: "result",
          element: <Result />,
        },
      ],
    },
    {
      path: "/student/:id",
      element: (
        <div>
          <Navbar />
          <Params />
        </div>
      ),
    },
    {
      path:'*',
      element:
      <NotFound/>
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App; 


// jis parent k ander children bnate hai too parent wale me outlet lgana jruri hai nhi tooo children nhi dikhne k

// ekk NotFound wala page bnaya hai jiske liye path * diya hai * ka mtlb hai ki inn sbbko chodkar baki sare page per notfound wala page dikhaye 


