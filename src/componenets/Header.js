import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { connect } from 'react-redux';
import { getUser, logout } from '../actions/userAction';

class Header extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Home</Link>


                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        {
                            this.props.user === null ? (<li class="nav-item ">
                                <Link class="nav-link" to="/login">Login</Link>
                            </li>) : (<li class="nav-item ">
                                <Link class="nav-link" to="/logout" onClick={() => this.props.logout()}>Logout</Link>
                            </li>)
                        }



                    </ul>
                </div>
            </nav>

        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    }
}



export default connect(mapStateToProps, { getUser, logout })(Header)