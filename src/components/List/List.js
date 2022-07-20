import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById } from '../../redux/store';
import { getColumnsByList } from '../../redux/store';
import { useParams } from 'react-router';

const List = props => {

    const { listId } = useParams();
    const columns = useSelector(state => getColumnsByList(state, listId))
    const listData = useSelector(state => getListById(state, listId));

    return (
        
        <div className={styles.list}>
            <header className={styles.header}>
                <h1 className={styles.title}>{listData.title}</h1>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <div className={styles.columns}>

                {columns.map(column => <Column key={column.id} {...column} />)}

            </div>   
            <ColumnForm listId={listId}/> 
        </div>
    );
};

export default List;