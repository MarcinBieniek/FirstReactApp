import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addList } from '../../redux/store';

const ListForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [description, setDescritpion] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescritpion('');
    }

	return (

        <form onSubmit={handleSubmit} className={styles.listForm}>
            <label>Title: </label>
            <TextInput tvalue={title} onChange={e => setTitle(e.target.value)} />
            <label>Descritpion: </label>
            <TextInput value={description} onChange={e => setDescritpion(e.target.value)} />
            <Button>Add list</Button>
        </form>

	);
};

export default ListForm;
