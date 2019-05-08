import React from 'react';
import PropTypes from 'prop-types';
import css from './ErrorFetch.module.css';

const ErrorFetch = ({ text }) => <p className={css.error}>{text}</p>;
ErrorFetch.propTypes = {
  text: PropTypes.string.isRequired,
};
export default ErrorFetch;
