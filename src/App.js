import './App.css';
import Home from './components/home';
import Navbar from'./components/navbar'
import AddVideo from './components/addVideo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PNF from '../src/components/pageNotFound'


function App() {
  return (
    <div className="App">
      <BrowserRouter>   
     <Navbar/>
     <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<AddVideo/>} path='/add-video'/>
      <Route element={<PNF/>} path='*'/>

     </Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
