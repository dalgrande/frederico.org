import React, { useState, useEffect } from "react";

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
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./styles/styles";
import SearchItem from "./lib/search";
import { fetchData } from "./lib/api";
import { User } from "./components/User/User";
import { Post } from './components/Post/Post';

function App() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("users");
  const [dataDetails, setDataDetails] = useState();
  const [searchValue, setSearchValue] = useState('');
  const [showDetails] = useState(true);



  const handleContextChangeToUsers = () => {
    setQuery("users");
    setDataDetails();
  };

  const handleContextChangeToPosts = () => {
    setQuery("posts");
    setDataDetails();
  };

  const handleSearchItem = (e) => {
    setSearchValue(e.target.value);
  };

  const showUserDetails = item => {
    if (showDetails) {
      setDataDetails(
        <User item={item} />
      );
    }
  };

  const showPostDetails = item => {
    if (showDetails) {
      setDataDetails(
        <Post item={item} />
      );
    }
  };

  useEffect(() => {
    SearchItem(searchValue);
    const fetchedData = () => fetchData(query).then(data => setData(data.data));
    fetchedData();
  }, [query, searchValue]);

  return (
    <Container>
      <AppBar className={classes.AppBar}>
        <div className={classes.Logo}>
          frederico.org
          <SearchIcon className={classes.SearchIcon} />
          <Input
            disableUnderline={true}
            autoFocus={true}
            className={classes.Search}
            value={searchValue}
            onChange={(e) => handleSearchItem(e)}
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
    </Container>
  );
}

export default App;
