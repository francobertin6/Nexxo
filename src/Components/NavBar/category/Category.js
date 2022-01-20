// import react-router
import { Link } from "react-router-dom";

const Category = (props) => {

    const {name} = props;

    return(
        <>
        <li className="category">
           <Link to={"/" + name}> 
                {name}
            </Link>
        </li>
        </>
    )
}

export default Category;