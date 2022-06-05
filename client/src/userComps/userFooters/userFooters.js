import '../css/DevDr.css';

function UserFooter({ theme, title, text }) {
    return (
        <div className="full__wide">
            <footer className={`${theme}--footer`}>
                <p className={`${theme}--copyright`}>{ title }</p>
                { text 
                ? (
                    <p className={`${theme}--contributions`}>{ text }</p>
                ) : (
                    <div></div>
                ) }
            </footer>
        </div>
    );
};

export default UserFooter;
