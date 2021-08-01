import '../styles/globals.css';
import PropTypes from 'react';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.propTypes ={
  Component: PropTypes.element,
  pageProps: PropTypes.element
}