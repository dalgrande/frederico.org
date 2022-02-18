import React from "react";

import { Paper } from "@material-ui/core";
import { useStyles } from "../../styles/styles";
export const User = ({
    item
}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.SecondPaper}>
            <p className={classes.DetailsText}>
                <strong>ID: </strong> {item.id}
            </p>
            <p className={classes.DetailsText}>
                <strong>Nome: </strong>
                {item.name}
            </p>
            <p className={classes.DetailsText}>
                <strong>Username: </strong>
                {item.username}
            </p>
            <p className={classes.DetailsText}>
                <strong>Email: </strong>
                {item.email}
            </p>
            <p className={classes.DetailsText}>
                <strong>Phone: </strong>
                {item.phone}
            </p>
            <p className={classes.DetailsText}>
                <strong>Rua: </strong>
                {item.address.street}
            </p>
            <p className={classes.DetailsText}>
                <strong>Apto: </strong>
                {item.address.suite}
            </p>
            <p className={classes.DetailsText}>
                <strong>Cep: </strong>
                {item.address.zipcode}
            </p>
            <p className={classes.DetailsText}>
                <strong>Cidade: </strong>
                {item.address.city}
            </p>
            <p className={classes.DetailsText}>
                <strong>Empresa: </strong>
                {item.company.name}
            </p>
        </Paper>
    )
}