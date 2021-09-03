import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

function Header() {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                    George FE Test
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;