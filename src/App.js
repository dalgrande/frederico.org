import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Grid,
  AppBar,
  List,
  ListItem,
  ListItemText,
  Paper,
  MenuList,
  Button,
  Input
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  rootGrid: {
    padding: 20,
    marginTop: 75
  },
  AppBar: {
    height: 65,
    backgroundColor: "rgba(240, 147, 43,0.9)",
    alignItems: "left"
  },
  Logo: {
    padding: 15,
    fontSize: 25,
    textShadow: "1px 1px 1px black"
  },
  Search: {
    color: "white",
    fontSize: 20
  },
  SearchIcon: {
    marginLeft: 70,
    height: 20,
    width: 50
  },
  NavPaper: {
    width: 150,
    height: 800,
    marginBottom: 10,
    position: "fixed",
    left: 10
  },
  NavList: {
    padding: 15
  },
  MainPaper: {
    width: 500,
    height: 797,
    position: "fixed",
    left: 200,
    overflow: "auto",
    padding: 3
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
    width: 500,    
    position: "fixed",
    left: 750,
    top: 95
  }
}));

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("users");
  const [searchValue, setSearchValue] = useState('');
  const [dataDetails, setDataDetails] = useState();
  const [showDetails] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/${query}`
      );
      setData(result.data);
    };
    fetchData();
  }, [query]);

  const handleContextChangeToUsers = () => {
    setQuery("users");
    setDataDetails();
  };

  const handleContextChangeToPosts = () => {
    setQuery("posts");
    setDataDetails();
  };

  let handleSearchItem = (e) => {
    let textSearch = e.target.value    
    document.querySelectorAll(".list").forEach(function(li) {
      let item = li.firstChild.textContent;      
      if (item.toLowerCase().indexOf(textSearch) > -1) {
        li.style.display = "block";        
      } else {
        li.style.display = "none";
      }
      setSearchValue(textSearch);      
    });
  };

  const showUserDetails = item => {    
    if (showDetails) {
      setDataDetails(
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
      );
    }
  };

  const showPostDetails = item => {    
    if (showDetails) {
      setDataDetails(
        <Paper className={classes.SecondPaper}>
          <p className={classes.DetailsTextPost}>{item.body}</p>
        </Paper>
      );
    }
  };

  return (
    <Container maxWidth="xl">
      <AppBar className={classes.AppBar}>
        <div className={classes.Logo}>
          frederico.org
          <SearchIcon className={classes.SearchIcon} />
          <Input
            disableUnderline={true}
            autoFocus={true}
            className={classes.Search}
            value={searchValue}
            onChange={handleSearchItem}
            type="text"
            placeholder="Buscar"
          />
        </div>
      </AppBar>
      <Grid container className={classes.rootGrid}>
        <Grid>
          <Paper className={classes.NavPaper}>
            <MenuList className={classes.NavList}>
              <Button onClick={handleContextChangeToUsers}>Usuários</Button>
              <Button onClick={handleContextChangeToPosts}>Publicações</Button>
              <hr />
            </MenuList>
          </Paper>
        </Grid>
        <Grid>
          <Paper className={classes.MainPaper}>
            {data.map(item => (
              <List className="list" key={item.id}>
                {query === "users" ? (
                  <ListItem
                    className={classes.ListText}
                    onClick={() => showUserDetails(item)}
                  >
                    <ListItemText>{item.name}</ListItemText>
                  </ListItem>
                ) : (
                  <ListItem
                    className={classes.ListText}
                    onClick={() => showPostDetails(item)}
                  >
                    <ListItemText>{item.title}</ListItemText>
                  </ListItem>
                )}
              </List>
            ))}
          </Paper>
          {dataDetails}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
