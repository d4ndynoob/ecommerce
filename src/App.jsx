import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import './App.css'

import { useState } from 'react'

const App = () => {

	const [numArticulos, setNumArticulos] = useState(0)
	const [articulos, setArticulos] = useState([])

	// Contador
	function aumentarContador(){
		setNumArticulos(numArticulos + 1)
	}
	function disminuirContador(){
		if(numArticulos > 0){
			setNumArticulos(numArticulos - 1)
		}
	}

	// Producto
	function agregarCarrito(){
		if(numArticulos > 0){
			setArticulos([...articulos, {
				id: articulos.length,
				description: "Fall Limited Edition Sneakers",
				price: 125,
				numArticulos,
				total: 125 * numArticulos
			}])
			setNumArticulos(0)
		} else {
			console.log('No agregaste articulos al carrito')
		}
	}
	function eliminarArticuloCarrito(id){
		const nuevoCarrito = articulos.filter(articulo => articulo.id != id)
		setArticulos(nuevoCarrito)
	}

	function handleCheckout(){
		setArticulos([])
		setNumArticulos(0)
	}


  return (
		<div className='container'>
			<Navbar articulos={articulos} eliminarArticuloCarrito={eliminarArticuloCarrito} handleCheckout={handleCheckout}/>
			<Product numArticulos={numArticulos} aumentarContador={aumentarContador} disminuirContador={disminuirContador} agregarCarrito={agregarCarrito}/>
		</div>

		//   <div class="attribution">
		//   Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
		//   Coded by <a href="#">Your Name Here</a>.
		// </div>
	)
}

export default App