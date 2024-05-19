import { Route, Routes, useLocation } from 'react-router-dom';

import { CurrentUserProvider } from '../../contexts/CurrentUserContext';
import '../../index.css';
import './App.css';

// components
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import LandingPage from '../landingPage/LandingPage';
import Register from '../register/Register';
import Login from '../login/Login';
import Portfolios from '../portfolios/Portfolios';
import AboutMe from '../abouMe/AboutMe';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import FormInfo from '../formInfo/FormInfo';
import Gallery from '../gallery/Gallery';
import CreatePortfolio from '../createPortfolio/CreatePortfolio';

function App() {
  const location = useLocation();
  const shouldRenderFooter = location.pathname !== '/contact';

  return (
    <>
      <CurrentUserProvider>
        <Header>
          <NavBar />
        </Header>
        <main className="page">
          <Routes>
            <Route path="/signup" element={<Register />} />

            <Route path="/signin" element={<Login />} />

            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/portfolios/:userId" element={<Portfolios />} />
            <Route path="/about-me" element={<AboutMe />} />

            <Route path="/contact/:userId" element={<Contact />} />
            <Route path="/edit-info" element={<FormInfo />} />
            <Route path="/gallery/:userId/:portfolioId" element={<Gallery />} />
            <Route path="/create-portfolio" element={<CreatePortfolio />} />

            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
        {shouldRenderFooter && <Footer />}
      </CurrentUserProvider>
    </>
  );
}

export default App;
