import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/MainPage/Main';
import SearchMain, {loader} from './components/SearchPage/SearchMain';
import HeroMainPage from './components/HeroPage/HeroMainPage';
const router = createBrowserRouter([
  { path: "/", element: <Main></Main>},
  { path: "/heroes",loader:loader, element: <SearchMain></SearchMain>},
  {path: "/hero/:heroName", element: <HeroMainPage></HeroMainPage>}
])

function App() {

  return <RouterProvider router={router} />;
}

export default App;
