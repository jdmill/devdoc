import { useState, useEffect } from 'react';
import './codeblock.css';

function CodeBlock ({ compTitle, compType, compImage, compText, compTheme, str }) {

    const [code, setCode] = useState('');

    useEffect(() => {
        if (compImage !== "/" && compType === 'header') {
            setCode(`
            
import '../css/DevDr.css';   

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
        
import '../css/DevDr.css';

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