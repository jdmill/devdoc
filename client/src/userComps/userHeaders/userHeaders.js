import '../css/DevDr.css';

function UserHeader({ theme, title, photo }) {
    return (
        <div className="top__section">
            <header className={`${theme}--header`}>
                <h1 className={`${theme}--h1`}>{ title }</h1>
            </header>
            {( photo 
            ?
                <img className="my__hero" src={photo} alt={title} />
            :
                <div></div>
            )}
        </div>
    );
};

export default UserHeader;
