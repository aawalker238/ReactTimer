import React from "react";
import {Link,IndexLink} from "react-router";

var Nav = React.createClass({
    render: function(){
        return (
            <div>
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Timer</li>
                            <li><IndexLink activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Timer</IndexLink></li>
                            <li><Link activeClassName="active" activeStyle={{fontWeight: "bold"}} to="/">Countdown</Link></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li className="menu-text">Created by <a href="http://www.anthonyawalker.com" target="_blank" >Anthony Walker</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

export default Nav;