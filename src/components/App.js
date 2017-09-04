import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import NavDraw from './NavDraw';

class App extends Component {
	render(){
		return(
			<BrowserRouter>
				<div>
					<NavDraw />
					<Route exact path='/' component={Home} />
					<Route exact path='/profile' component={Profile} />
				</div>
			</BrowserRouter>	
			);
	}
}

export default App;
