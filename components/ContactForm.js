import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { useState } from 'react';
import { StylesContext } from '@material-ui/styles';
import styles from '../styles/ContactForm.module.css'
import sgMail from '@sendgrid/mail'

const setApiKey = () => { sgMail.setApiKey(process.env.SENDGRID_API_KEY)}
const SENGRID_API = "https://api.sendgrid.com/v3/mail/send"

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = ( e ) => {
        e.preventDefault(); 
        console.log(email, subject, message);
    }


    return (
        <div className={styles.displaycolumn}>
            <form method="POST">
                <div className={styles.textfield}>
                    <TextField name="email" onChange={(e) => setEmail(e.target.value)} variant="outlined" label="Your Email" size="small"></TextField>
                </div>
                <div className={styles.textfield}>
                    <TextField name="title" onChange={(e) => setTitle(e.target.value)} variant="outlined" label="Message Title" size="small"></TextField>
                </div>
                <div className={styles.textfield}>
                    <TextField name="message" onChange={(e) => setMessage(e.target.value)} variant="outlined" label="Message Body" size="medium"></TextField>
                </div>
                <Button type="submit" onClick={( e, email, title, messagebody ) => handleSubmit( e, email, title, messagebody )}>Submit</Button>
            </form>
        </div>
    );
}