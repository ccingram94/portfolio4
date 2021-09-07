import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import { StylesContext } from '@material-ui/styles';
import styles from '../styles/ContactForm.module.css'

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={styles.displaycolumn}>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.textfield}>
                    <TextField name="email" onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Your Email" size="small"></TextField>
                </div>
                <div className={styles.textfield}>
                    <TextField name="title" onChange={(e) => setTitle(e.target.value)} variant="outlined" label="Message Title" size="small"></TextField>
                </div>
                <div className={styles.textfield}>
                    <TextField name="body" onChange={(e) => setBody(e.target.value)} variant="outlined" label="Message Body" size="medium"></TextField>
                </div>
                <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
            </form>
        </div>
    )
}