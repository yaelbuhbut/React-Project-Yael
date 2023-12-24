import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './index.css';
import App from './App';
import { Home } from "./pages/home";
import { Posts } from "./pages/posts";
import { Admin } from "./pages/admin";
import { createBrowserRouter } from "react-router-dom";
import { Contact } from "./pages/contact";
import { Post } from "./pages/post";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/Posts",
                element: <Posts />,
            },
            {
                path: "/Posts/:id",
                element: <Post />,
            },
            {
                path: '/Contact',
                element: <Contact />,
            },
            {
                path: '/Admin',
                element: <Admin />,
            }
        ],
    },
]);
