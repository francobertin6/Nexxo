// import react
import { useEffect, useState } from "react";

// import react-router
import { useParams } from "react-router-dom";

// import ItemDetail
import ItemDetail from "./ItemDetail/ItemDetail.js";


// import firebase
import db from "../../../Firebase/firebase.js";
import { collection, getDocs } from "firebase/firestore";

// console.log(itemJson)

const ItemDetailContainer = () => {
    
    const collections = collection(db, "items");

    const docs = getDocs(collections);

    const [ItemDetails, setItemDetails] = useState({});
    const [loading, setLoading] = useState(true);

    let {secondParams} = useParams();
    let {Params} = useParams();

    

    useEffect( ()=>{

        const newArray = []

        setTimeout(() => {   

            docs.then((res) => {
               const doc = res.docs;

               doc.map( doc => {
                   newArray.push(doc.data());
               })

               console.log(newArray)

               let element = newArray.filter( element => element.id === Number(secondParams));
               

               setItemDetails(element[0])  
           })

           
               setLoading(false)
           }, 2000);
       
    }, [secondParams])

    

    if(loading === true){
        console.log(loading)
        return(
        <>

        <div class="loader"></div>

        </>
        )
    }else if(loading === false && Params !== "item"){
        return(
            <>
            </>
        )
    }else{
        return(
        <>
            <ItemDetail item = {ItemDetails} id={secondParams}/>
        </>
    )
    }

}

export default ItemDetailContainer;