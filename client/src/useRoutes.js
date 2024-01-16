import { Link, useRoutes } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { YserList } from './views/yserList';
import { Yser } from './views/Yser';

export const UseRoutes = () => { // useRoutes is a hook, it returns an element
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/yser', element: <YserList /> },
    { path: '/yser/:id', element: <Yser /> },
    { path: '*', element: <h1>Not Found</h1> }
  ]); 


  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/yser">Yser List</Link></li>
        </ul>
      </nav>
      {element}
    </>
  )  
}
              