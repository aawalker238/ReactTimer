// REACT/REACTDOM
import React from "react"; // SAME AS var React = require("react");
import ReactDOM from "react-dom"; // SAME AS var ReactDOM = require("react-dom");
import {Route, Router, IndexRoute, hashHistory} from "react-router";
import Main from "Main";

// Foundation (for styling)
require("style!css!foundation-sites/dist/foundation.min.css");
$(document).foundation();

// custom.scss
require("style!css!sass!customStyles");


// RENDER
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>    
        </Route>
    </Router>,
    document.getElementById("app")
);
