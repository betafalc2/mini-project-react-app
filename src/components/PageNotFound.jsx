import { Link } from "react-router-dom";


function PageNotFound(){
    return(
        <div key={PageNotFound} className="pagenot-found">
            <p>
                <img src="src\imgs\404.png" alt="404"/>
            </p>
            <Link to="/" className="back-button">
                <button>Back</button>
            </Link>

        </div>
    )



};

export default PageNotFound;