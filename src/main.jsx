// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// // import { createBrowserRouter, RouterProvider } from "react-router-dom";
// // import Main from './components/3-main/Main.jsx';
// // import Hero from './components/2-hero/Hero.jsx';
// // import Contact from './components/4-contact/Contact.jsx';
// // const router =createBrowserRouter([
// //   {path:'/', element: <App />},
// //   {path:'/about', element: <Hero />},
// //   {path:'/projects', element: <Main />},
// //   {path:'/contact', element: <Contact />},


// // ])
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <RouterProvider router={router} /> */}
//     <App />
//   </React.StrictMode>,
// )
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)