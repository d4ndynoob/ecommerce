// Imagen and SVG
import Logo from '../../assets/svg/logo.svg';
import Avatar from '../../assets/images/image-avatar.png';
import cartIcon from '../../assets/svg/icon-cart.svg';
import menuIcon from '../../assets/svg/icon-menu.svg';

import Imagen from '../../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../assets/svg/icon-delete.svg'
import closeIcon from '../../assets/svg/icon-close.svg'


// Css
import styles from './navbar.module.css';

// Hooks
import { useState } from 'react'

const Navbar = ({ articulos, eliminarArticuloCarrito, handleCheckout }) => {
	const [cartVisible, setCartVisible] = useState(false)
	const [menuVisible, setMenuVisible] = useState(false)

	return (
		<header className={styles.container}>
			{/* {console.log(articulos)} */}
			<nav className={styles.navbar}>
				{/* Left */}
				<div className={styles.navbar__leftBox}>
					<button
						className={styles.navbar__containerMenu}
						onClick={() => setMenuVisible(!menuVisible)}
					>
						<img src={menuIcon} alt='Menu Icon' />
					</button>
					<a href='/' className={styles.navbar__containerLogo}>
						<img src={Logo} alt='Logo Sneakers' />
					</a>
					<ul className={menuVisible ? styles.navbar__showMenu : null}>
						{menuVisible ? (
							<button onClick={() => setMenuVisible(!menuVisible)}>
								<img src={closeIcon} alt='Icono cerrar' />
							</button>
						) : null}

						<li>
							<a href='/'>Collection</a>
						</li>
						<li>
							<a href='/'>Men</a>
						</li>
						<li>
							<a href='/'>Women</a>
						</li>
						<li>
							<a href='/'>About</a>
						</li>
						<li>
							<a href='/'>Contact</a>
						</li>
					</ul>
				</div>

				{/* Right */}
				<div className={styles.navbar__rightBox}>
					<div className={styles.navbar__containerButtonItems}>
						<button
							className={styles.navbar__containerCart}
							onClick={() => setCartVisible(!cartVisible)}
						>
							<img src={cartIcon} alt='Cart Icon' />
						</button>
						{
							articulos.length !== 0 ? (
								<span>{articulos.length}</span>
							) : null
						}
					</div>
					<button className={styles.navbar__containerAvatar}>
						<img src={Avatar} alt='Avatar' />
					</button>
				</div>
			</nav>
			<div
				className={
					cartVisible
						? styles.navbar__cartContainer
						: styles.navbar__cartContainerHide
				}
			>
				<div className={styles.navbar__cartContainerSpan}>
					<span className={styles.navbar__cartSpan}>Cart</span>
				</div>
				<div className={styles.navbar__cartContainerItems}>
					{articulos.length === 0 ? (
						<span>Your cart is empty</span>
					) : (
						<div className={styles.navbar__itemsGeneral}>
							{articulos.map((articulo, index) => (
								<div className={styles.navbar__item} key={index}>
									<img src={Imagen} alt='Imagen de articulo' />
									<div className={styles.navbar__itemDescription}>
										<h4>{articulo.description}</h4>
										<h5>
											${articulo.price} x {articulo.numArticulos}{' '}
											<span>${articulo.total}</span>
										</h5>
									</div>
									<button onClick={() => eliminarArticuloCarrito(articulo.id)}>
										<img src={deleteIcon} alt='Eliminar' />
									</button>
								</div>
							))}
							<button onClick={handleCheckout}>Checkout</button>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Navbar