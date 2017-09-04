import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import NavDrawer from './NavDrawer';
import {Header} from './styled/Template';

class App extends Component {
	render(){
		return(
			<BrowserRouter>
				<div>
					<NavDrawer />
					<Header>TicTacTuring</Header>
					<Route exact path='/' component={Home} />
					<Route exact path='/profile' component={Profile} />
				</div>
			</BrowserRouter>	
			);
	}
}

export default App;
