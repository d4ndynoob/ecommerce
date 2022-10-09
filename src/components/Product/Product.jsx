// Images
import product1 from '../../assets/images/image-product-1.jpg'
import product2 from '../../assets/images/image-product-2.jpg'
import product3 from '../../assets/images/image-product-3.jpg'
import product4 from '../../assets/images/image-product-4.jpg'
// - -
import productThumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg'
import productThumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg'
import productThumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg'
import productThumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg'

// icons
import minusIcon from '../../assets/svg/icon-minus.svg';
import plusIcon from '../../assets/svg/icon-plus.svg';
import cartIcon from '../../assets/svg/icon-cart.svg';

// Css
import styles from './product.module.css'

// Hooks
import { useState, useEffect } from 'react'

const product = ({ numArticulos, aumentarContador, disminuirContador, agregarCarrito }) => {
	const [image, setImage] = useState(product1)
	const [activeImg, setActiveImg] = useState(null)	//almacena el img que esta activo
	const [activeBtn, setActiveBtn] = useState(null)	//almacena el img que esta activo
	const [claseActiva, setClaseActiva] = useState('')

	useEffect(() => {
		const imgClaseActiva = document.getElementById('imgButton')
		setActiveImg(imgClaseActiva)
		setActiveBtn(document.getElementById('btnPrincipal'))
		setClaseActiva(imgClaseActiva.className)
	}, [])

	const handleChangeImage = (newImage, imgElement) => {
		setImage(newImage)

		//cambiamos clases
		activeImg.classList.remove(activeImg.className)

		// da clic a una nueva imagen
		imgElement.classList.remove(imgElement.class)
		imgElement.classList.add(claseActiva)
		setActiveImg(imgElement)
	}

  return (
		<section className={styles.section}>
			<div className={styles.section__left}>
				<figure className={styles.section__mainContainer}>
					<img src={image} alt='Sneaker product' />
				</figure>

				<button
					onClick={e => {
						handleChangeImage(product1, e.target)
					}}
				>
					<img src={productThumbnail1} alt='Sneaker product' className={styles.active} id='imgButton'/>
				</button>
				<button
					onClick={e => {
						handleChangeImage(product2, e.target)
					}}
				>
					<img src={productThumbnail2} alt='Sneaker product' className='' />
				</button>
				<button
					onClick={e => {
						handleChangeImage(product3, e.target)
					}}
				>
					<img src={productThumbnail3} alt='Sneaker product' className='' />
				</button>
				<button
					onClick={e => {
						handleChangeImage(product4, e.target)
					}}
				>
					<img src={productThumbnail4} alt='Sneaker product' className='' />
				</button>
			</div>

			<div className={styles.section__right}>
				<h2 className={styles.company}>sneaker company</h2>
				<h1 className={styles.section__name}>Fall limited edition sneakers</h1>
				<p className={styles.section__text}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi eum
					temporibus tenetur amet nihil quia ipsum maxime ut eius iste! Qui,
					architecto alias.
				</p>
				<div className={styles.section__priceContainer}>
					<span>$125.00</span>
					<span>50%</span>
				</div>
				<h3 className={styles.section__discount}>$250.00</h3>
				<div className={styles.section__optionsContainer}>
					<div>
						<button onClick={disminuirContador}>
							<img src={minusIcon} alt='Minus icon' />
						</button>
						<span>{numArticulos}</span>
						<button onClick={aumentarContador}>
							<img src={plusIcon} alt='Plus icon' />
						</button>
					</div>
					<div>
						<button onClick={agregarCarrito}>
							<div></div>
							<span>Add to cart</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default product