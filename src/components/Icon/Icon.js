import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ icon, ...rest }) => {
  return <FontAwesomeIcon icon={icon} {...rest} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;
