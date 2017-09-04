import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

class NavDraw extends Component {
	state = {open:false};

	toggle = () => {
		this.setState((prevState, props) => {
			return {open:!prevState.open}
		});
	}

	render(){
		return(
			<div>
				<FloatingActionButton onTouchTap={this.toggle}>
					<Menu />
				</FloatingActionButton>
				<Drawer open={this.state.open}>
					<div style={{height:200,width:'100%',backgroundColor:'salmon'}}>
						Login Container
					</div>
					<Divider />
					
					<Link to='/play'>
						<MenuItem primaryText='Play' onTouchTap={this.toggle} />
					</Link>
					
					<Link to='/profile'>
						<MenuItem primaryText='Profile' onTouchTap={this.toggle} />
					</Link>
				</Drawer>
			</div>
			);
	}
}

export default NavDraw;