import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    rootGrid: {
        display: "flex",
        flexWrap: "no-wrap",
        padding: 20,
        marginTop: 75,
        "@media (max-width: 400px)": {
            flexDirection: "column",            
          }
    },
    AppBar: {
        width: "100%",
        backgroundColor: "rgba(240, 147, 43,0.9)",
        alignItems: "center",
    },
    Logo: {
        padding: 15,
        fontSize: 25,
        textShadow: "1px 1px 1px navy",
    },
    Search: {
        color: "white",
        fontSize: 20
    },
    SearchIcon: {
        marginLeft: 170,
        height: 20,
        width: 50
    },
    NavPaper: {
        width: 150,
        height: 100,
        marginBottom: 10,
        marginRight: 10,
        "@media (max-width: 400px)": {
            marginTop: 70,
          }
    },
    NavList: {
        padding: 15
    },
    MainPaper: {
        overflow: "auto",
        height: 500,
        width: "20%",
        padding: 30,
        "@media (max-width: 400px)": {
            width: "80%",
          }
    },
    ListText: {
        cursor: "pointer",
        padding: 6,
        marginLeft: 2
    },
    DetailsText: {
        padding: 1,
        marginTop: 20,
        marginLeft: 25,
    },
    DetailsTextPost: {
        padding: 1,
        marginTop: 17,
        marginLeft: 25,
        marginRight: 25,
        fontSize: 30
    },
    SecondPaper: {      
        width:'40%',
        height: 'auto',
        marginLeft: 10,        
        padding: 15,
        "@media (max-width: 400px)": {
            width: "auto",
            marginTop: 20,
            marginLeft: 0,   
          }
    }
}));

