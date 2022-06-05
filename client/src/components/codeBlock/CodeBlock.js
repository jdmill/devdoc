import { useState, useEffect } from 'react';
import './codeblock.css';

function CodeBlock ({ compTitle, compType, compImage, compText, compTheme, str }) {

    const [code, setCode] = useState('');

    useEffect(() => {
        if (compImage !== "/" && compType === 'header') {
            setCode(`
            
import './DevDr.css'; 

function UserHeader() {   
    return (   
        <div className="top__section">   
            <header className="${compTheme}--header">   
                <h1 className="${compTheme}--h1">${compTitle}</h1>   
            </header>   
            <img className="my__hero" src="${compImage}" alt="${compTitle}"/>   
        </div>   
    );
};

export default UserHeader;

            `);
        } else if (compType === 'header') {
        setCode(`
        
import './DevDr.css';

function UserHeader() {   
    return (   
        <div className="top__section">   
            <header className="${compTheme}--header">   
                <h1 className="${compTheme}--h1">${compTitle}</h1>   
            </header>   
        </div>   
    );   
};   

export default UserHeader;   

                `);
        } else if (compImage !== "/" && compType === 'article-photo') {
            setCode(`

import './DevDr.css';

function UserArticle() {
    return (
        <div className="${compTheme}--background my__background">
            <div className="${compTheme}--article__card">
                <h2 className="${compTheme}--h2">${compTitle}</h2>
                <img className="article__photo" src="${compImage}" alt="${compTitle}"/>
                <pre className="${compTheme}--body">${compText}</pre>
            </div>
        </div>
    );
};

export default UserArticle;

            `);
        } else if (compType === 'article-photo') {
            setCode(`

import './DevDr.css';

function UserArticle() {
    return (
        <div className="${compTheme}--background my__background">
            <div className="${compTheme}--article__card">
                <h2 className="${compTheme}--h2">${compTitle}</h2>
                <pre className="${compTheme}--body">${compText}</pre>
            </div>
        </div>
    );
};

export default UserArticle;

            `);
        } else if (compType === 'contact') {
            setCode(`

import React, { useState } from 'react';
import './DevDr.css';

function UserContact() {

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
            window.location.href ={\`mailto: ${compText}?cc=\${email}&subject=${compTitle}&body=\${message}\`};

            setEmail('');
            setMessage('');
        };
    };

    const handleFocusLoss = (e) => {
        const { name,value } = e.target;

        if ((name === 'message') && value.length < 1) {
            setError(\`\${name} field cannot be empty!\`);
        } else if (name === 'email' && /^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$/.test(value) === false) {
            setError('email must be valid')
        } else {
            setError('');
        }
    }

    return (
        <div className="${compTheme}--background my__background"}>
            <div className="${compTheme}--article__card">
            <h2 className="${compTheme}--h2">${compTitle}</h2>
                <form className="${compTheme}--contact">
                    <label
                        className="${compTheme}--label my__labels my__first__label"
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
                    className="${compTheme}--label my__labels"
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
                    <input className="${compTheme}--submit" id="submit" type="button" value="SUBMIT" onClick={handleSubmit}/>
                </form>
            </div>
        </div>
    );
};

export default UserContact;

            `);
        } else if (compText !== " " && compType === 'footer') {
            setCode(`

import './DevDr.css';

function UserFooter() {
    return (
        <div>
            <footer className="${compTheme}--footer">
                <p className="${compTheme}--copyright">${compText}</p>
                <p className="${compTheme}--contributions">${compText}</p>
            </footer>
        </div>
    );
};

export default UserFooter;  
    
                    `);
            } else if (compType === 'footer') {
                setCode(`
                
import './DevDr.css';

function UserFooter() {
    return (
        <div>
            <footer className="${compTheme}--footer">
                <p className="${compTheme}--copyright">${compText}</p>
                <div></div>
            </footer>
        </div>
    );
};

export default UserFooter;  
        
                        `);
                } else {
            setCode('');
        }
    },[compTitle, compType, compImage, compText, compTheme])
    
    return (
        <code className="code__block"><pre>{ str }
        {code}
        </pre></code>
    );
};

export default CodeBlock;