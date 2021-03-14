import { Component } from "react";
import style from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
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
                    <Main posts={this.state.posts}/>
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