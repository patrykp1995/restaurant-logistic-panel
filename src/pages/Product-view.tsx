import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'

function ProductView() {
    let {state} = useLocation();
    const navigate = useNavigate();
    const singleItem = state.contentItem;

    return (
        <div>
            <h1>{singleItem.name}</h1>
            <button onClick={() => navigate(-1)}>go back</button>
            {/*<h1>sadsa{contentItem.name}</h1>*/}
            {/*<img alt={contentItem.name} src={contentItem.image}/>*/}
            {/*<p>{contentItem.price}</p>*/}
        </div>
    )
}

export default ProductView;
