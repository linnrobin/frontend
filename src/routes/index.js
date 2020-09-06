import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryScreen from "../screens/CategoryScreen";
import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";
import ChatScreen from "../screens/ChatScreen";
import ChatLobbyScreen from "../screens/ChatLobbyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HistoryScreen from "../screens/HistoryScreen";

function Routes() {
  return (
    // <header className="App-header">
    <Switch>
      <Route path="/properties/:propertyId">
        <DetailScreen />
      </Route>
      <Route exact path="/search/:provinceName/:typeName/:statusName">
        <SearchScreen />
      </Route>
      <Route exact path="/search">
        <SearchScreen />
      </Route>
      <Route exact path="/chat/:UserId">
        <ChatScreen />
      </Route>
      <Route exact path="/chatLobby">
        <ChatLobbyScreen />
      </Route>
      <Route exact path="/profile">
        <ProfileScreen />
      </Route>
      <Route exact path="/history">
        <HistoryScreen />
      </Route>
      <Route exact path="/">
        <CategoryScreen />
      </Route>
    </Switch>
    // </header>
  );
}

export default Routes;
