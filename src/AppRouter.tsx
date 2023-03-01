import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Landing from './modules/Landing/Landing';


const router = createBrowserRouter([
  { path: '/', element: <Landing /> }
])

const AppRouter: React.FC = () => {

  return (
    <RouterProvider router={router} />
  );
}

export default AppRouter;
