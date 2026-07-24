
import './index.css'




import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root';
import Home from './pages/Home';
import About from './pages/About';
import ContactsUs from './pages/ContactsUs';
import Blog from './pages/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      { index: true, element: <Home/> },
      { path: "/about", element: <About/> },
      { path: "/contactsUs", element: <ContactsUs/> },
      { path: "/blog", element: <Blog/> },
    
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);



