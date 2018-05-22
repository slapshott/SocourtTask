import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Header from './components/common/Header';
import RegisterPage from './components/Auth/RegisterPage';
import LoginPage from './components/Auth/LoginPage';
import HomePage from './components/HomePage/HomePage';
import BookList from './components/BookPage/BookList'
import GenreList from './components/GenrePage/GenreList';
import SingelBook from './components/BookPage/SingleBook';
import SingelGenre from './components/GenrePage/SingleGenre';
import CreateBook from './components/BookPage/CreateBook';

class App extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        localStorage.clear();
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="App">
                <Header loggedIn={localStorage.getItem('authToken') != null} onLogout={this.onLogout} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route path="/api/createBook" component={CreateBook} />
                    <Route path="/api/books" component={BookList} />
                    <Route path="/api/book/:id" component={SingelBook} />
                    <Route path="/api/genres" component={GenreList} />
                    <Route path="/api/genre/:id" component={SingelGenre} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);