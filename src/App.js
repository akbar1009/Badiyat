import logo from './logo.svg';
import './App.css';
import Nav from './componets/Nav';
import Hero from './componets/Hero';
import Catagory from './componets/catagories/Catagory';
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import './componets/Style.css'
import Author from './componets/Author';
import Page from './componets/Page';
function App() {
  return (
      <Router>
    <div className='body'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/author' element={<><Nav/><Author/></>}/>
          <Route path='/author/:id' element={<><Nav/><Author/></>}/>
          <Route path='/author/:id' element={<><Nav/><Author/></>}/>
          <Route path='/page' element={<><Nav/><Page/></>}/>
        </Routes>
    </div>
      </Router>
  );
}

export default App;
