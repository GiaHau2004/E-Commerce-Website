import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {
    const { getTotalCartItem } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='mens'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='womens'>women</Link>{menu === "women" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kid") }}><Link style={{ textDecoration: 'none', color: '#626262' }} to='kids'>Kids</Link>{menu === "kid" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    )
}
