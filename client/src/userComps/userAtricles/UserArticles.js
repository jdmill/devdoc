import '../css/DevDr.css';

function UserArticle({ theme, title, photo, text }) {
    return (
        <div className={`${theme}--background my__background`}>
            <div className={`${theme}--article__card`}>
                <h2 className={`${theme}--h2`}>{ title }</h2>
                {( photo
                ?
                    <img className="article__photo" src={photo} alt={title} />
                :
                    <div></div>
                )}
                <pre className={`${theme}--body`}>{ text }</pre>
            </div>
        </div>
    );
};

export default UserArticle;
