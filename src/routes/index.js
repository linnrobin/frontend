import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoryScreen from "../screens/CategoryScreen";
import SearchScreen from "../screens/SearchScreen";
import DetailScreen from "../screens/DetailScreen";
import ChatScreen from "../screens/ChatScreen";

function Routes() {
  return (
    // <header className="App-header">
    <Switch>
      <Route path="/properties/:propertyId">
        <DetailScreen />
      </Route>
      <Route exact path="/search">
        <SearchScreen />
      </Route>
      <Route exact path="/chat/:UserId">
        <ChatScreen />
      </Route>
      <Route exact path="/">
        <CategoryScreen />
      </Route>
    </Switch>
    // </header>
  );
}

export default Routes;
