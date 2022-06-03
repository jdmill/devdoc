import '../css/DevDr.css';

function UserFooter({ theme, title }) {
    return (
        <div>
            <footer className={`${theme}--footer`}>
                <p className={`${theme}--copyright`}>{ title }</p>
            </footer>
        </div>
    );
};

export default UserFooter;
