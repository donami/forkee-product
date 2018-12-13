import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ title }) => (
  <div>
    <h1>{title}</h1>
    <p>Sorry, the page you were trying to view does not exist.</p>
  </div>
);

NotFound.propTypes = {
  title: PropTypes.string.isRequired,
};

export default NotFound;
