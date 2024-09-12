import './App.styled.js';
import { AppContainer } from './App.styled.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homescreen from './pages/homescreen/homescreen.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homescreen/>
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
