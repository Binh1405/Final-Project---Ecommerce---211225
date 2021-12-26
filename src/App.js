import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import PublicNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  
  return (
    <Router>
      <PublicNavbar/>
      <Routes>
        <Route exact path="/" element={<Homepage/>}/>
        <Route exact path="/login" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegisterPage/>}/>
        <Route exact path="/profile" element={<ProfilePage/>}/>
        <Route exact path="/product/:id" element={<ProductDetailPage/>}/>
        <Route element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
