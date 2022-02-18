import React from "react";

import { Paper } from "@material-ui/core";
import { useStyles } from "../../styles/styles";

export const Post = ({ item }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.SecondPaper}>
            <p className={classes.DetailsTextPost}>{item.body}</p>
        </Paper>
    )
}