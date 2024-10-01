import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './component/About/About'
import Home from './component/Home/Home'
import Layout from './component/Layout/Layout'
import Portfolio from './component/Portfolio/Portfolio'
import Contact from './component/Contact/Contact'
import Notfound from './component/Notfound/Notfound'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



let x = createBrowserRouter([
  {path : '' , element :<Layout/> , children:[
    {index:true , element:<Home/>},
    {path : 'about' , element:<About/>},
    {path : 'contact' , element:<Contact/>},
    {path : 'portfolio' , element:<Portfolio/>},
    {path : '*' , element:<Notfound/>},]
    
},
])

function App() {
 

  return <>


  <RouterProvider router={x}></RouterProvider>
  
  </>


  
}

export default App
