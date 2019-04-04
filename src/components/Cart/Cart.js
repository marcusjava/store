import React, { Component, Fragment } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { cart } = value;
					return (
						<section>
							{cart.length > 0 ? (
								<Fragment>
									<Title name="Seu" title="Carrinho" />
									<CartColumns />
									<CartList value={value} />
									<CartTotals value={value} />
								</Fragment>
							) : (
								<EmptyCart />
							)}
						</section>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default Cart;
