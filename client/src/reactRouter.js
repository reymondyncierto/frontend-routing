// install dom version of the react router
  // npm i react-router-dom

// go to index.js
  // import BrowserRouter from react-router-dom
  // wrap your application in a BrowserRouter

// define routes
  // go to App.js
  // import Route from react-router-dom
  // import Routes from react-router-dom
  // import your components
  // define your routes
    // return <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/contact" element={<Contact />} />
    // </Routes>
    // adding navigation to prevent writing out the entire url using Link
      // highlight the part that using the normal way of using href
        // <a href="/">Home</a>
        // <a href="/about">About</a>
        // <a href="/contact">Contact</a>
          // when you click on the link, it will refresh the page
          // this is not what we want
          // we want to prevent the page from refreshing
          // we want to use the Link component from react-router-dom
          // import Link from react-router-dom
          // replace the anchor tags with Link
            // <Link to="/">Home</Link>
            // <Link to="/about">About</Link>
            // <Link to="/contact">Contact</Link>
              // now when you click on the link, it will not refresh the page
              // it will just show the component that you want to show
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { Contact } from './views/Contact';

export const ReactRouter = () => {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )  
}
              