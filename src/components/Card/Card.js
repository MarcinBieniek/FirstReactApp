import styles from './Card.module.scss'

const Card = props => {
    return (
        <ul className={styles.card}>{props.title}</ul>
    );

};

export default Card;