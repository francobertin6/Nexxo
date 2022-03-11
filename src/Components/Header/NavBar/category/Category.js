// import react-router
import { Link } from "react-router-dom";

const Category = (props) => {

    const {name} = props;

    return(
        <>
        <li className="category">
           <Link to={"/index/" + name}> 
                <p>{name}</p>
            </Link>
        </li>
        </>
    )
}

export default Category;