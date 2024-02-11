
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Pages/HomePage';
import LandingPage from './Pages/LandingPage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <>
    <Header/>
    <Routes>

    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={ <HomePage/>}/>
   
    </Routes>
   
    <Footer/>
    
    </>
  );
}

export default App;
