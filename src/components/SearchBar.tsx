import {Container, createStyles, InputBase, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {AppDispatch} from "../app/store";
import {selectSearchTerm, setSearchTerm} from "../reducers/searchReducer";

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
    const searchTerm: string = useAppSelector(selectSearchTerm);
    const dispatch: AppDispatch = useAppDispatch();

    return (
        <Container className={classes.container} disableGutters={true} maxWidth={false}>
            <form className={classes.form} noValidate autoComplete="off">
                <Typography className={classes.typography} variant="h6">
                    Search
                </Typography>
                <InputBase id="search-input" className={classes.inputBase} value={searchTerm}
                           onChange={event => dispatch(setSearchTerm(event.target.value))} />
            </form>
        </Container>
    );
}

export default SearchBar;