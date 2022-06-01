

// should this be the default function?
function Toolbox() {
    function addArticle () {
        console.log()
    }

    return (
        <div className="container">
            <h2 className="topLineContainer">Your Toolbox!  Click any component to add it to your project</h2>
            <ul className="button-group">
                        {/* Here we use the map method to return each component that the user may select */}
                <li><button onClick={addArticle} className="button-group-item" >Article</button></li>
            </ul>  
        </div>
    );
};

export default Toolbox;