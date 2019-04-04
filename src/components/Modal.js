import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './styles';
import { Link } from 'react-router-dom';

export default class extends Component {
	render() {
		return (
			<ProductConsumer>
				{({ modalOpen, closeModal, modalProduct }) => {
					const { img, title, price } = modalProduct;
					if (!modalOpen) {
						return null;
					} else {
						return (
							<ModalContainer>
								<div className="container">
									<div className="row">
										<div
											id="modal"
											className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
										>
											<h5>Adicionado ao carrinho</h5>
											<img className="img-fluid" alt="imagem" src={img} />
											<h5>{title}</h5>
											<h5 className="text-muted">
												Preço R$ <span>{price}</span>
											</h5>
											<Link to="/">
												<ButtonContainer onClick={() => closeModal()}>
													Continuar comprando
												</ButtonContainer>
											</Link>
											<Link to="/cart">
												<ButtonContainer cart onClick={() => closeModal()}>
													Ir para o carrinho
												</ButtonContainer>
											</Link>
										</div>
									</div>
								</div>
							</ModalContainer>
						);
					}
				}}
			</ProductConsumer>
		);
	}
}

const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.3);
	display: flex;
	align-items: center;
	justify-content: center;
	#modal {
		background: var(--mainWhite);
		padding: 30px;
	}
`;
