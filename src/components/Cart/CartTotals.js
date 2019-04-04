import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PaypalButton from './PaypalButton';

export default function CartTotals({ value, history }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
						<Link to="/">
							<button
								className="btn btn-outline-danger text-uppercase mb-3 px-5"
								type="button"
								onClick={() => clearCart()}
							>
								Limpar carrinho
							</button>
						</Link>
						<h5 className="text-title">
							SubTotal:{' '}
							<span>
								<strong>R$ {cartSubTotal}</strong>
							</span>
						</h5>
						<h5 className="text-title">
							Frete:{' '}
							<span>
								<strong>R$ {cartTax}</strong>
							</span>
						</h5>
						<h5 className="text-title">
							Total:{' '}
							<span>
								<strong>R$ {cartTotal}</strong>
							</span>
						</h5>
						<PaypalButton total={cartTotal} clearCart={clearCart} history={history} />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
