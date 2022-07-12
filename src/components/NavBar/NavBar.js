import styles from './NavBar.module.scss';

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
                        <a href="#">Home</a>    
                    </li>
                    <li>
                        <a href="#">Favourite</a>    
                    </li>
                    <li>
                        <a href="#">About</a>    
                    </li>
                </ul>
            </div>
        </nav>
    );
  };

export default NavBar;

