import './App.styled.js';
import { AppContainer } from './App.styled.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homescreen from './pages/homescreen/homescreen.jsx';
import ErrorPage from './pages/404-page/404-page.jsx';
import SermonPage from './pages/sermons/sermon.jsx';
import SermonDetailsPage from './pages/sermons/sermonDetails/sermonDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen/>
  },
  {
    path: "/eagles-ccc/sermons/",
    element: <SermonPage/>
  },
  {
    path: "/eagles-ccc/sermons-details/:id",
    element: <SermonDetailsPage/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  },
])

function App() {
  return (
    <AppContainer>
      <RouterProvider router={router}/>
    </AppContainer>
  );
}

export default App;
