import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </>
);

export default App;
