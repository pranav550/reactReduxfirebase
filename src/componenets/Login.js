import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, twitterLogin } from '../actions/userAction';

class Login extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-sm-12 jumbotron">
                        <h1>Login with Favourite <b>Social Network</b> </h1>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger btn-block" onClick={this.props.googleLogin}>Login With Google</button>
                    </div>
                    <div className="col-sm-6">
                        <button className="btn btn-danger btn-block">Login With twitter</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default connect(null, { googleLogin })(Login);

