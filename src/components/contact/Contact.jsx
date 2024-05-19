import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedinIn,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import './Contact.css';
import FormContact from '../formContact/FormContact';

import { Link } from 'react-router-dom';
import { fetchProfile } from '../../utils/userApi';

function Contact() {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await fetchProfile(userId);

        setProfile(profileData);
      } catch (err) {
        console.error('Error fetching profile data:', err);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <section className="contact">
      <div className="contact__no-parallax contact_position">
        <h2 className="contact__text contact__text_margin">Contacto</h2>
        <FormContact userId={userId} />
      </div>

      <div
        className="contact__parallax contact__parallax_bg contact_position "
        style={{ '--url': `url(${profile?.banner})` }}
      >
        <h3 className="contact__text contact__text_size">
          Conoceme más en mis redes sociales
        </h3>
      </div>

      <div className="contact__no-parallax contact__no-parallax_flex contact_position ">
        <h3 className="contact__social-text">
          Visítanos en nuestras redes sociales
        </h3>
        <div className="contact__social-container">
          <div className="contact__social-networks">
            <Link to={profile?.instagram}>
              <FontAwesomeIcon
                className="contact__social-icon"
                icon={faInstagram}
              />
            </Link>
          </div>
          <div className="contact__social-networks">
            <Link to={profile?.linkedin}>
              <FontAwesomeIcon
                className="contact__social-icon"
                icon={faLinkedinIn}
              />
            </Link>
          </div>
          <div className="contact__social-networks">
            <Link to={profile?.facebook}>
              <FontAwesomeIcon
                className="contact__social-icon"
                icon={faFacebookF}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
