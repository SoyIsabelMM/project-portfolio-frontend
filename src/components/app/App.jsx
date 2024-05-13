import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { getPhotos, searchPhotos } from '../../utils/pexelData';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import '../../index.css';
import './App.css';

// componentes
import Header from '../header/Header';
import NavBar from '../navBar/NavBar';
import LandingPage from '../landingPage/LandingPage';
import Register from '../register/Register';
import Login from '../login/Login';
import Portfolios from '../portfolios/Portfolios';
import ProfileCard from '../profileCard/ProfileCard';
import AboutMe from '../abouMe/AboutMe';
import Profile from '../profile/Profile';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import FormInfo from '../formInfo/FormInfo';
import Gallery from '../gallery/Gallery';

function App() {
  const [photos, setPhotos] = useState([]);
  const [limit, setLimit] = useState(3);
  const location = useLocation();

  //Manejo de estado del usuario
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getPhotos()
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
      });
  }, []);

  const handleSearch = async (query) => {
    try {
      const searchResult = await searchPhotos(query);
      setPhotos(searchResult);
    } catch (error) {
      console.error('Error al buscar fotos:', error);
    }
  };

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  const shouldRenderFooter = location.pathname !== '/contact';

  const uniqueAuthors = {};
  const filteredPhotos = photos.filter((photo) => {
    if (!uniqueAuthors[photo.photographer]) {
      uniqueAuthors[photo.photographer] = true;
      return true;
    }
    return false;
  });

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header>
          <NavBar />
        </Header>
        <main className="page">
          <Routes>
            <Route path="/signup" element={<Register />} />

            <Route path="/signin" element={<Login />} />

            <Route path="/profile/:userId" element={<Profile />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/about-me" element={<AboutMe />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/edit-info" element={<FormInfo />} />
            <Route path="/galery" element={<Gallery />} />

            <Route
              path="/"
              element={
                <LandingPage onClick={handleSeeMore} onSearch={handleSearch}>
                  {filteredPhotos.slice(0, limit).map((photo, index) => (
                    <ProfileCard
                      key={index}
                      photo={photo}
                      onClick={handleSeeMore}
                    />
                  ))}
                </LandingPage>
              }
            />
          </Routes>
        </main>
        {shouldRenderFooter && <Footer />}
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
