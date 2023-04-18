import React from "react";
import {useLocation, useNavigate} from 'react-router-dom'

function ProductView() {
    let {state} = useLocation();
    const navigate = useNavigate();
    const singleItem = state.contentItem;

    return (
        <div className="productViewDetails">
            <h1>{singleItem.name}</h1>
            <img alt={singleItem.name} src={singleItem.img}/>
            <p>{singleItem.description}</p>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
    )
}

export default ProductView;
