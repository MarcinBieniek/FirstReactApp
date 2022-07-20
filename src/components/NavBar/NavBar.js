import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.navbar}> 
            <div className={styles.navbar__container}>
                <div className={styles.navbar__logo}>
                   <a href="#">
                        <i className="fa fa-list"></i>
                    </a>
                </div>
                <ul className={styles.navbar__list}>
                    <li>
                        <Link to="/">Home</Link>    
                    </li>
                    <li>
                        <Link to="/favourite">Favourite</Link>    
                    </li>
                    <li>
                        <Link to="/about">About</Link>    
                    </li>
                </ul>
            </div>
        </nav>
    );
  };

export default NavBar;

