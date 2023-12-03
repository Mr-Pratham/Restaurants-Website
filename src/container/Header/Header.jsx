import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Tastiest creations by Chef Isabella Culinary Maestro" />
      <h1 className="app__header-h1">Dine like never before</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>An internationally renowned chef with a flair for creating culinary masterpieces that transcend borders.</p>
      <button type="button" className="custom__button">Signature: Mango Tango Fusion </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
