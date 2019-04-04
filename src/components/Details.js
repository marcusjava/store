import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './styles';

class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{({ detailProduct, addToCart, openModal }) => {
					const { id, company, img, info, price, title, inCart } = detailProduct;
					return (
						<div className="container py-3">
							<div className="row">
								<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 col-md-6 mx-auto my-3">
									<img className="img-fluid" src={img} alt="product" />
								</div>
								<div className="col-10 col-md-6 mx-auto">
									<h2>Modelo: {title}</h2>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
										Frabicado por <span className="text-uppercase">{company}</span>
									</h4>
									<h4 className="text-blue">
										<strong>R$ {price}</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										Mais informações sobre o produto:
									</p>
									<p className="text-muted lead">{info}</p>
									<div>
										<Link to="/">
											<ButtonContainer>Voltar aos produtos</ButtonContainer>
										</Link>
										<ButtonContainer
											cart
											onClick={() => {
												addToCart(id);
												openModal(id);
											}}
											disabled={inCart ? true : false}
										>
											{inCart ? 'No carrinho' : 'Adicionar ao carrinho'}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default Details;
