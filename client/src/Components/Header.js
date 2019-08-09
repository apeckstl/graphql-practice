import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Header = () => {
    return(
        <div>
        <AppBar position="static" color="primary">
            <Toolbar>
                <MenuIcon/>
                <Typography variant="title" color="inherit">
                GraphQL Practice
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Header;
