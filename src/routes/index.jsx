import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { Usuario } from "../pages/usuario";
import { Template } from "../template";
import { Dashboard } from "../pages/dashboard"
import { Locais } from "../pages/locais";
import { Localidade } from "../pages/localidade";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/usuario',
        element: <Template />,
        children: [
            {
                path: '/usuario',
                element: <Usuario />,
            },
        
        ]
    },
    {
        path: '/dashboard',
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
        
        ]
    },
    {
        path: '/locais',
        children: [
            {
                path: '/locais',
                element: <Locais />,
            },
        
        ]
    },
    {
        path: '/localidade',
        children: [
            {
                path: '/localidade',
                element: <Localidade />,
            },
        
        ]
    }
])