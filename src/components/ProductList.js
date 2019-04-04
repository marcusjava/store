import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';

import { ProductConsumer } from '../context';

class ProductList extends Component {
	render() {
		return (
			<Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="Nossos" title="Produtos" />

						<div className="row">
							<ProductConsumer>
								{value =>
									value.products.map((product, idx) => <Product key={product.id} product={product} />)
								}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default ProductList;
