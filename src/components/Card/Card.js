import styles from './Card.module.scss'
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { toggleCardFavorite, deleteCard } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();
    const [ isFavorite, setIsFavorite ] = useState(props.isFavorite);
    const cardId = props.cardId;

    const handleClick = e => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
        dispatch(toggleCardFavorite(cardId));
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deleteCard(cardId))
    }

    return (
        <ul className={styles.card}>
            {props.title}
            <div>
                <button onClick={handleClick}
                    className={clsx(styles.button, isFavorite && styles.isFavorite) + ' fa fa-star-o'}
                />
                <button onClick={handleDelete}
                    className={styles.button__delete + ' fa fa-trash'}
                />
            </div>
        </ul>
    );

    

};

    
export default Card;