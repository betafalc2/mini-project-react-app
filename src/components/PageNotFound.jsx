import { Link } from "react-router-dom";


function PageNotFound(){
    return(
        <div key={PageNotFound} className="pagenot-found">
            <p>Oops, this page doesnt exist!</p>
            <Link to="/">Back</Link>

        </div>
    )



};

export default PageNotFound;