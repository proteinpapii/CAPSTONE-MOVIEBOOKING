import { RouteObject } from "react-router-dom";
import { AuthLayout, MainLayout } from 'components';
import { Account, Detail, Home, Login, Register, Ticketroom } from "pages";
import { PATH } from 'constant'


export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: PATH.account,
                element: <Account />
            },
            {
                path: PATH.detail,
                element: <Detail />
            },
            {
                path: PATH.ticketroom,
                element: <Ticketroom />
            },

        ],
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />,
            },
            {
                path: PATH.register,
                element: <Register />,
            },
            {
                path: PATH.account,
                element: <Account />
            }
        ],
    },
]