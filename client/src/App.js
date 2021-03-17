import { Component } from "react";
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';
import style from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import * as postService from './services/postService'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        postService.getAll()
            .then(posts => {
                this.setState({ posts })
            })

    }


    render() {
        return (
            <div className={style.app}>
                <Header />
                <div className={style.container}>
                    <Menu />
                    <Switch>
                        <Route path='/' exact>
                            <Main posts={this.state.posts} />
                        </Route>
                        <Route path='/about/:name' component={About} />
                        <Route path='/contacts' component={Contacts} />

                    </Switch>
                </div>
            </div>

        )
    }
}

/* function App() {
    return (
        <div className={style.app}>
            <Header />
            <div className={style.container}>
                <Menu />
                <Main />
            </div>
        </div>
    );
}
 */

export default App;