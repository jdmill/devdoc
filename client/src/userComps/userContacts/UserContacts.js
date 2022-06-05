import React, { useState } from 'react';
import '../css/DevDr.css';

function UserContact({ theme, title, text }) {

    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [error, setError] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;

        if ( name === 'email') {
            return setEmail(value);
        } else {
            return setMessage(value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.length && message.length) {
            window.location.href = `mailto: ${text}?cc=${email}&subject=${title}&body=${message}`;

            setEmail('');
            setMessage('');
        };
    };

    const handleFocusLoss = (e) => {
        const { name,value } = e.target;

        if ((name === 'message') && value.length < 1) {
            setError(`${name} field cannot be empty!`);
        } else if (name === 'email' && /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value) === false) {
            setError('email must be valid')
        } else {
            setError('');
        }
    }

    return (
        <div className={`${theme}--background my__background`}>
            <div className={`${theme}--article__card`}>
            <h2 className={`${theme}--h2`}>{ title }</h2>
                <form className={`${theme}--contact`}>
                    <label
                        className={`${theme}--label my__labels my__first__label`}
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input 
                        className="my__input"
                        name="email"
                        id="email"
                        type="text"
                        value ={email}
                        onChange={handleInput}
                        onBlur={handleFocusLoss}
                    />
                    <label
                        className={`${theme}--label my__labels`}
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea 
                        className="my__input message__input"
                        name="message"
                        id="message"
                        type="text"
                        value ={message}
                        onChange={handleInput}
                        onBlur={handleFocusLoss}
                    />
                    <p className="error" >{error}</p>
                    <input className={`${theme}--submit`} id="submit" type="button" value="SUBMIT" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
};

export default UserContact;

//className={`${theme}--background my__background`}
