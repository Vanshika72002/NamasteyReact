import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { WatchPage } from './components/WatchPage';
import { AllVideos } from './components/AllVideos';
// const AppRouter=createBrowserRouter([
//   {
//       👉path:"/home",//   or path:""
//       element:<Body/>,
//       //Body will be rendered 
//       children:[
//         {
//           👉path:"/home",
//           element:<MainContainer/>,
//         },
//         {
//           👉path:"/home/watch",
//           element:<WatchPage/>
//         }
//       ]
//   }
// ])
const AppRouter=createBrowserRouter([
  {
      path:"/",//   or path:""
      element:<Body/>,
      //Body will be rendered 
      children:[
        {
          path:"/",
          element:<MainContainer/>,
        },
        {
          path:"/watch",
          element:<WatchPage/>
        },
        {
          path:"/search",
          element:<AllVideos/>
        }
      ]
  }
])

function App() {
  return (
    <Provider store={store}>
        <div>
          <BrowserRouter><Head/></BrowserRouter> 
          {/* <Head/>👈👉without <Browser router---->Error(cannot destructure property of....)/</Browser> */}
          {/* /*After head whatever is provided by the RouterProvider is rendered */}
          <RouterProvider router={AppRouter}/>
        </div>
    </Provider>
  );
}

export default App;
