import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import flag from "../data/flags/us.png";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '24px'
    },
    flag: {
        display: 'inline',
    },
    name: {
        display: 'inline',
        marginLeft: 30
    },
    currency: {
        display: 'inline',
        float: 'right'
    },
});

function Item() {
    const classes = useStyles();

   return (
       <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.flag} color="textSecondary" gutterBottom>
                <img src={flag} alt="Flag" />
            </Typography>
            <Typography className={classes.name} variant="h4" component="h2">
                USD
            </Typography>
            <Typography className={classes.currency} variant="h4" component="h2">
                1.05 EUR
            </Typography>
        </CardContent>
    </Card>
   );
}

export default Item;