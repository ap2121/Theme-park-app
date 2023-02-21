import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './pages/Home/Home'
import './App.css';

function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
