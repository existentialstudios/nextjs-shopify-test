import ShopProvider from '../context/shopContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Cart from '../components/Cart';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return( 
    <ShopProvider>
      <Header />
      <Cart />
      <Component {...pageProps} />
      <Footer />
    </ShopProvider>
  )
}

export default MyApp
