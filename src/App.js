import './App.css';
  import * as ReactDOM from "react-dom/client";
  import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner';
// import Spinner from './components/Spinner';

export class App extends Component {
  rch=(coun)=>{
    let child=[{
      path: "/"+coun+"/entertainment",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}enter`} pages={8} category="entertainment"/>
      </>)
    },
    {
      path: "/"+coun+"/general",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}gen`} pages={8} category="general"/>
      </>)
    },
    {
      path: "/"+coun+"/business",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}bus`} pages={8} category="business"/>
      </>)
    },
    {
      path: "/"+coun+"/health",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}heal`} pages={8} category="health"/>
      </>)
    },
    {
      path: "/"+coun+"/science",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}sci`} pages={8} category="science"/>
      </>)
    },
    {
      path: "/"+coun+"/sports",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}spo`} pages={8} category="sports"/>
      </>)
    },
    {
      path: "/"+coun+"/technology",
      element:(<>
        <Navbar/>
        <News country={coun} key={`${coun}tech`} pages={8} category="technology"/>
      </>)
    },]
    return child;
  }
  
  render() {
    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route path="/" element={<>
    //       <Navbar/>
    //       <News pages={8} country="us"/>
    //     </>}>
    //       <Route path="technology" element={<>
    //     <Navbar/>
    //     <News country={coun} key={`${coun}tech`} pages={8} category="technology"/>
    //   </>} />
    //       {/* <Route path="about" element={<About />} /> */}
    //     </Route>
    //   )
    // );
    const router = createBrowserRouter([
      {
        path: "/",
        element: (<>
        <Navbar/>
        <News key="home" pages={8} country="us"/>
      </>),
      },
      {
        path:"/in",
        element: (<>
        <Navbar/>
        <News key="in" pages={8} country="in"/>
        </>),
      },
      {
        path:"/us",
        element: (<>
        <Navbar/>
        <News key="us" pages={8} country="us"/>
        </>),
      },
      {
        path:"/jp",
        element: (<>
        <Navbar/>
        <News key="jp" pages={8} country="jp"/>
        </>),
      }
    ].concat(this.rch("in")).concat(this.rch("jp")).concat(this.rch("us")));

    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      );
    return (
      <>

      </>
    )
  }
}

export default App
