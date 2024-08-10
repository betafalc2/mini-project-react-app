import { Link } from "react-router-dom";


function PageNotFound(){
    return(
        <div key={PageNotFound}>
            <img src="./imgs/pie.png"/>
            <Link to="/">Back</Link>

        </div>
    )



};

export default PageNotFound;