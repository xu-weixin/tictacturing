import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import { NavToggleButton } from '../styled/NavDrawer';

class NavDraw extends Component {
  state = { open: false, width: 250 };

  toggle = () => {
    this.setState((prevState, props) => {
      return { open: !prevState.open };
    });
  };

  render() {
    return (
      <div>
        <NavToggleButton
          toggle={this.toggle}
          width={this.state.width}
          open={this.state.open}
        />
        <Drawer open={this.state.open} width={this.state.width}>
          <div
            style={{ height: 200, width: '100%', backgroundColor: 'salmon' }}
          >
            Login Container
          </div>
          <Divider />

          <Link to="/play">
            <MenuItem primaryText="Play" onTouchTap={this.toggle} />
          </Link>

          <Link to="/profile">
            <MenuItem primaryText="Profile" onTouchTap={this.toggle} />
          </Link>
        </Drawer>
      </div>
    );
  }
}

export default NavDraw;
