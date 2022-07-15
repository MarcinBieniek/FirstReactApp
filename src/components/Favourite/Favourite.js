import styles from './Favourite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favourite = () => {
    return (
      <div className={styles.favourite}>
        <PageTitle>Favourite</PageTitle>
        <p className={styles.description}>Simple paragraph</p>
      </div>
    );
  };

export default Favourite;