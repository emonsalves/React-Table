import { createHashRouter } from 'react-router-dom';
import HomePage from '../pages/Home/HomePage';
import TablePage from '../pages/Tables/TablePage';
import PublicLayout from '../layouts/PublicLayout';
import NotFoundPage from '../pages/Tables/NotFounds/NotFoundPage';

const router = createHashRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: 'tables',
                element: <TablePage />,
            },
        ],
    },
]);

export default router;
