import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
export interface NavBarProps {}

const NavBar : React.FC<NavBarProps> = () => {
	return (
	<AppBar position="fixed">
	<Toolbar>
	  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
		Gentleman Programming React TEST
	  </Typography>
	  <Button color="inherit">Login</Button>
	</Toolbar>
  </AppBar>
  );
};

export default NavBar;
