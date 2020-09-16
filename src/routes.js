import React from "react"
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard";
import Post from "./Components/Post";
import Form from "./Components/Form";

export default (
    <Switch>
      <Route component={Auth} exact path="/auth" />
      <Route component={Dashboard}  path="/dashboard" />
      <Route component={Post}  path="/post/:postid" />
      <Route component={Form}  path="/new" />
    </Switch>
  );