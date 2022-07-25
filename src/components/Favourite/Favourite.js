import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favourite = () => {
    
    const cards = useSelector(state => getFavoriteCards(state));

    console.log('cards', cards)

    if(cards.length === 0) return (
      <div className={styles.favourite}>
        <PageTitle>Favorite</PageTitle>
        <p> No cards...</p>
      </div>
    );

    return (
      <div className={styles.favourite}>
        <PageTitle>Favorite</PageTitle>
        
        <article className={styles.column}>

            <h1 className={styles.title}>
                asd
            </h1>

            <ul>

              {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} cardId={card.id}/>)}

            </ul>

        </article>
        
      </div>
    );
  };

export default Favourite;