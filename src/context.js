import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct,
		cart: [],
		modalOpen: false,
		modalProduct: detailProduct,
		cartSubTotal: 0,
		cartTax: 0,
		cartTotal: 0,
	};

	componentDidMount() {
		this.setProducts();
	}

	setProducts = () => {
		//fazendo copia do array ao inves de serem passados por referencia
		let products = [];
		storeProducts.forEach(item => {
			products = [...products, { ...item }];
		});
		this.setState({ products });
	};

	openModal = id => {
		const product = this.getItem(id);
		this.setState({ modalProduct: product, modalOpen: true });
	};

	closeModal = () => this.setState({ modalOpen: false });

	getItem = id => this.state.products.find(item => item.id === id);

	handleDetail = id => {
		const product = this.getItem(id);
		this.setState({ detailProduct: product });
	};

	addToCart = id => {
		const tempProducts = [...this.state.products];
		const index = tempProducts.indexOf(this.getItem(id));
		const product = tempProducts[index];
		product.inCart = true;
		product.count = 1;
		product.total = product.price;
		this.setState({ products: tempProducts, cart: [...this.state.cart, product] }, () => this.addTotals());
	};

	incrementItem = id => {
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(product => product.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count + 1;
		product.total = product.price * product.count;
		//tempCart.forEach(product => {
		//	if (id === product.id) {
		//		product.count = product.count + 1;
		//		product.total = product.price * product.count;
		//	}
		//});

		this.setState({ cart: [...tempCart] }, () => this.addTotals());
	};

	decrementItem = id => {
		console.log('Decrement');
		let tempCart = [...this.state.cart];
		const selectedProduct = tempCart.find(product => product.id === id);
		const index = tempCart.indexOf(selectedProduct);
		const product = tempCart[index];
		product.count = product.count - 1;
		if (product.count === 0) {
			this.removeItem(id);
		} else {
			product.total = product.price * product.count;
			this.setState({ cart: [...tempCart] }, () => this.addTotals());
		}

		//tempCart.forEach(product => {
		//	if (id === product.id) {
		//		if (product.count < 1) {
		//			console.log('removendo item do carrinho', product.count);
		//			this.removeItem(id);
		//		} else {
		//			product.count = product.count - 1;
		//			product.total = product.price * product.count;
		//		}
		//	}
		//});
	};

	removeItem = id => {
		const tempProducts = [...this.state.products];
		let tempCart = [...this.state.cart];

		tempCart = tempCart.filter(product => product.id !== id);
		const index = tempProducts.indexOf(this.getItem(id));
		let removedProduct = tempProducts[index];
		removedProduct.inCart = false;
		removedProduct.count = 0;
		removedProduct.total = 0;
		this.setState({ products: [...tempProducts], cart: [...tempCart] }, () => this.addTotals());
	};

	clearCart = () => {
		this.setState({ cart: [] }, () => {
			this.setProducts();
			this.addToCart();
		});
	};

	addTotals = () => {
		let subTotal = 0;
		this.state.cart.map(item => (subTotal += item.total));
		this.setState({ cartSubTotal: subTotal });
		const tempTax = subTotal * 0.1;
		const tax = parseFloat(tempTax.toFixed(2));
		const total = subTotal + tax;
		this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
	};

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					openModal: this.openModal,
					closeModal: this.closeModal,
					addToCart: this.addToCart,
					incrementItem: this.incrementItem,
					decrementItem: this.decrementItem,
					removeItem: this.removeItem,
					clearCart: this.clearCart,
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
