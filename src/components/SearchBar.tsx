import {Container, createStyles, InputBase, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            position: 'sticky',
            top: 0,
            margin: 0,
            backgroundColor: 'black'
        },
        form: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
            width: 'fit-content',
            paddingLeft: '24px',
        },
        inputBase: {
            backgroundColor: 'white',
            paddingLeft: '0.5em'
        },
        typography: {
            display: 'inline',
            color: 'white',
            marginLeft: 0
        }
    }),
);

function SearchBar() {

    const classes = useStyles();

    return (
        <Container className={classes.container} disableGutters={true} maxWidth={false}>
            <form className={classes.form} noValidate autoComplete="off">
                <Typography className={classes.typography} variant="h6">
                    Search
                </Typography>
                <InputBase id="search-input" className={classes.inputBase} />
            </form>
        </Container>
    );
}

export default SearchBar;