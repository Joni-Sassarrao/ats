import Home from './Pages/Home'
import {Outlet} from 'react-router-dom';

function App() {

  return (
    <>
      <Home/>
      <Outlet/>
    </>
  )
}

export default App