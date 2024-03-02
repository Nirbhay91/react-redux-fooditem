import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Cards';
import CardsDetails from './components/CardsDetails';
// import {
//   BrowserRouter as Router,
//   useRoutes,
// } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
// const App1 = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Cards /> },
//     { path: "/cart/:id", element: <CardsDetails /> },
//     // ...
//   ]);
//   return routes;
// };


function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
