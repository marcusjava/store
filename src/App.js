import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Default from './components/Default';
import './App.css';

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<Switch>
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route path="/" exact component={ProductList} />
					<Route component={Default} />
				</Switch>
				<Modal />
			</Fragment>
		);
	}
}

export default App;
