import styles from './Card.module.scss'
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggeCardFavorite } from '../../redux/store';

const Card = props => {

    const dispatch = useDispatch();
    const [ isFavorite, setIsFavorite ] = useState(props.isFavorite);
    const cardId = props.cardId;


    const handleClick = e => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
        dispatch(toggeCardFavorite(cardId));
    }

    return (
        <ul className={styles.card}>
            {props.title}
            <button onClick={handleClick}
                className={clsx(styles.button__favorite, isFavorite && styles.isFavorite) + ' fa fa-star-o'}
            />
        </ul>
    );

};

export default Card;