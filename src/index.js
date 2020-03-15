import React from 'react';
import ReactDOM from 'react-dom';
import App from './componenets/App';
//redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from './componenets/Login';
import Header from './componenets/Header';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(<Provider store={store}>
    <Router>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/login" component={Login} />

            </Switch>

        </div>
    </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA