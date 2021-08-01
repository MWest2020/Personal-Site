/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
