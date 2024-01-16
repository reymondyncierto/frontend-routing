// install dom version of the react router
//   npm i react-router-dom

// go to index.js
//   import BrowserRouter from react-router-dom
//   wrap your application in a BrowserRouter

// define routes
//   go to App.js
//   import Route from react-router-dom
//   import Routes from react-router-dom
//   import your components
//   define your routes
//     return <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   adding navigation to prevent writing out the entire url using Link
//     highlight the part that using the normal way of using href
//       <a href="/">Home</a>
//       <a href="/about">About</a>
//       <a href="/contact">Contact</a>
//         when you click on the link, it will refresh the page
//         this is not what we want
//     we want to prevent the page from refreshing
//     import Link from react-router-dom
//     replace the anchor tags with Link
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/contact">Contact</Link>
//         now when you click on the link, it will not refresh the page
//         it will just show the component that you want to show

// dynamic routing
//   go to yserList.js
//   import Link from react-router-dom
//   export const YserList = () => {
//     return(
//       <>
//         <h1>YSER List</h1>
//         <Link to="/yser/1">YSER 1</Link>
//         <Link to="/yser/2">YSER 2</Link>
//       </>
//     )
//   }
//   go to yser.js
//   import useParams from react-router-dom
//   export const Yser = () => {
//     const { id } = useParams()
//     return (
//       <div>
//         <h1>YSER {id}</h1>
//         <p>This is the YSER page</p>
//       </div>
//     )
//   }
//   go to yserList.js
//   import Link from react-router-dom
//   export const YserList = () => {
//     return(
//       <>
//         <h1>YSER List</h1>
//         <Link to="/yser/1">YSER 1</Link>
//         <Link to="/yser/2">YSER 2</Link>
//       </>
//     )
//   }
//   go to yser.js
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './views/Home';
import { About } from './views/About';
import { Contact } from './views/Contact';
import { YserList } from './views/yserList';
import { Yser } from './views/Yser';

export const ReactRouter = () => {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/yser" element={<YserList />} />
        <Route path="/yser/:id" element={<Yser />} /> {/* :id is a parameter, dynamic routing */}
      </Routes>
    </>
  )  
}
              