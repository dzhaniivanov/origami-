import style from './Header.module.css'
import NavigationItem from './NavigationItem/NavigationItem';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className={style.navigation}>
            <ul>
                <li className="listItem"><img src="/white-origami-bird.png" alt="origami pic" /></li>
                <Link to='/'><NavigationItem>Home</NavigationItem></Link>
                <Link to='/about'><NavigationItem>About</NavigationItem></Link>
                <Link to='/contacts'><NavigationItem>Contacts</NavigationItem></Link>
                <Link to='/about/pesho'><NavigationItem>peshaka</NavigationItem></Link>
                <Link to='/about/gosho'><NavigationItem>goshaka</NavigationItem></Link>
                <Link to='/about/ivan'><NavigationItem>vanio</NavigationItem></Link>
                <Link to='/about/pesho'><NavigationItem>Going to 7</NavigationItem></Link>
                <Link to='/about/pesho'><NavigationItem>Going to 8</NavigationItem></Link>
                <Link to='/about/pesho'><NavigationItem>Going to 9</NavigationItem></Link>
                <Link to='/about/pesho'><NavigationItem>Going to 10</NavigationItem></Link>
                <Link to='/about/pesho'><NavigationItem>Going to 11</NavigationItem></Link>
            </ul>
        </nav>

    );
}

export default Header;