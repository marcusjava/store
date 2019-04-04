import React from 'react';

const CartItem = ({ item, value }) => {
	const { id, title, img, price, total, count } = item;
	const { incrementItem, decrementItem, removeItem } = value;
	return (
		<div className="row my-2 text-center">
			<div className="col-10 mx-auto col-lg-2">
				<img src={img} className="img-fluid" alt="produto" style={{ width: '5rem', height: '5rem' }} />
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">Produto: </span>
				{title}
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<span className="d-lg-none">Preço: </span>
				{price}
			</div>
			<div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
				<div className="d-flex justify-content-center">
					<div>
						<span className="btn btn-black mx-1" onClick={() => decrementItem(id)}>
							-
						</span>
						<span className="btn btn-black mx-1" onClick={() => {}}>
							{count}
						</span>
						<span className="btn btn-black mx-1" onClick={() => incrementItem(id)}>
							+
						</span>
					</div>
				</div>
			</div>

			<div className="col-10 mx-auto col-lg-2">
				<div className="cart-icon" onClick={() => removeItem(id)}>
					<i className="fa fa-trash" />
				</div>
			</div>
			<div className="col-10 mx-auto col-lg-2">
				<strong>Total: R$ {total} </strong>
			</div>
		</div>
	);
};

export default CartItem;
