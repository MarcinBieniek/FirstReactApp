import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {

    const search = useSelector(state => state.searchInput);

    const cards = useSelector(state => state.cards).filter(card => card.columnId === props.id && card.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <article className={styles.column}>
            <h1 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}></span>
                {props.title}
            </h1>

                {cards.map(card => <Card key={card.id} title={card.title} />)}
                <CardForm columnId={props.id} />


                

        </article>
    );
};

export default Column;