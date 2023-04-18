import React from "react";
import './MenuItems.scss'
import {useGetMenuQuery} from "../../feature/api/apiSlice";
import {Link} from "react-router-dom";

const MenuItems = () => {
    const {
        data: menu,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetMenuQuery();

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else if (isSuccess) {
        content = (
            <div className="menuContainer">

                {menu.map((contentItem) => {
                    return (
                        <Link
                            to={`/menu/${contentItem.id}`}
                            state={{contentItem}}
                        >
                            <div className="menuContainer__element" key={contentItem.id}>
                                <img src={contentItem.img} alt={contentItem.name} width="300" height={200}/>
                                <div className="menuContainer__element--description">
                                    <p className="descriptionName">{contentItem.name}</p>
                                    <span>price:<p>{contentItem.price}$$</p></span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        );
    } else if (isError) {
        content = <p>{error}</p>;
    }

    return <>{content}</>;
};
export default MenuItems;
