import React from 'react';

const CartColumns = props => {
	return (
		<div className="container-fluid d-none d-lg-block">
			<div className="row">
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Produtos</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Nome</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Valor</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Quantitade</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Excluir</p>
				</div>
				<div className="col-10 mx-auto col-lg-2">
					<p className="text-uppercase">Total</p>
				</div>
			</div>
		</div>
	);
};

export default CartColumns;
