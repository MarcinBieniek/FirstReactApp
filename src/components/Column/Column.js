import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = props => {

    console.log(props)

    return (
        <article className={styles.column}>
            <h1 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}></span>
                {props.title}
            </h1>

                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
                <CardForm columnId={props.id} action={props.action} />


        </article>
    );
};

export default Column;