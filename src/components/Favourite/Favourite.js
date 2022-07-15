import styles from './Favourite.module.scss';

const Favourite = () => {
    return (
      <div className={styles.favourite}>
        <h1 className={styles.title}>Favourite</h1>
        <p className={styles.description}>Simple paragraph</p>
      </div>
    );
  };

export default Favourite;