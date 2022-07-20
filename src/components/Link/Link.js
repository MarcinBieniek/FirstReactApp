import styles from './Link.module.scss';

const Link = (props) => {

    return (
        <a className={styles.listLink} >
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </a>
    );

};

export default Link;