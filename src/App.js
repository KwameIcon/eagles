import './App.styled.js';
import { AppContainer } from './App.styled.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homescreen from './pages/homescreen/homescreen.jsx';
import ErrorPage from './pages/404-page/404-page.jsx';
import SermonPage from './pages/sermons/sermon.jsx';
import SermonDetailsPage from './pages/sermons/sermonDetails/sermonDetails.jsx';
import EventsPage from './pages/events/event.jsx';
import EventDetailsPage from './pages/events/eventDetails/eventDetails.jsx';
import GalleryPage from './pages/gallery/gallery.jsx';
import AboutPage from './pages/about/about.jsx';

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
    path: "/eagles-ccc/events",
    element: <EventsPage/>
  },
  {
    path: "/eagles-ccc/event-details/:id",
    element: <EventDetailsPage/>
  },
  {
    path: "/eagles-ccc/gallery/",
    element: <GalleryPage/>
  },
  {
    path: "/eagles-ccc/about us/",
    element: <AboutPage/>
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
