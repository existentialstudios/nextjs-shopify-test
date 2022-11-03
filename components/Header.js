import {useContext} from 'react';
import Link from 'next/link';
import {FiShoppingCart} from 'react-icons/fi';
import {ShopContext} from '../context/shopContext';

const Header = () => {
    const { openCart } = useContext(ShopContext);

    return(
        <header className="header">
            <Link href="/">
                <a className="logo">Van Diamond Apparel</a>
            </Link>
            <button onClick={() => openCart()}>
                Cart<FiShoppingCart className="icon" />
            </button>
        </header>
    );
};

export default Header;