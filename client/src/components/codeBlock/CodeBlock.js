import './codeblock.css';

function CodeBlock ({ str }) {
    return (
        <code className="code__block"><pre>{ str }</pre></code>
    );
};

export default CodeBlock;