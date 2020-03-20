import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import Mainpage from './Component/Mainpage'
import EmailCode from './Component/EmailCode'

function App() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/EmailCode" component={EmailCode} />
        </Switch>
    </div>
  );
}


export default App

