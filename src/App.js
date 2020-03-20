import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Mainpage from './Component/Mainpage'
import EmailCode from './Component/EmailCode'
import Company from './Component/Company'
import Personal from './Component/Personal'
import Login from './Component/Login'

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/EmailCode" component={EmailCode} />
            <Route exact path="/Company" component={Company} />
            <Route exact path="/Personal" component={Personal} />
            <Route exact path="/Login" component={Login} />
        </Switch>
    </div>
  );
}


export default App

