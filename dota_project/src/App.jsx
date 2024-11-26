import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import SearchMain from './components/SearchMain';

const router = createBrowserRouter([
  { path: "/", element: <Main></Main>},
  { path: "/heroes", element: <SearchMain></SearchMain>}
])

function App() {

  return <RouterProvider router={router} />;
}

export default App;
