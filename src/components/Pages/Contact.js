import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section className="container">
            <h2 className="section-title">Contact me</h2>
            <div className="form">
            <form className="form">
                <div className="form">
                    <label className="form" htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                </div>
                <div className="form">
                    <label className="form" htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange} />
                </div>
                <div className="form">
                    <label className="form" htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
            </div>
        </section>
    )
}

export default Contact;