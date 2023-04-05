import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title = "Default Title", subtitle = "Default Subtitle" }) => {
  return (
    <div className="header-container">
      <h1 className="header-title">{title}</h1>
      <h2 className="header-subtitle">{subtitle}</h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};

export default Header;
