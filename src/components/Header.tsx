import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    appBar: {
        height: '4em'
    },
    toolbar: {
        height: 'inherit'
    }
});

function Header() {

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static">
            <Toolbar className={classes.toolbar} variant="dense">
                <Typography variant="h4" color="inherit">
                    George FE Test
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;