import React from "react";
import './MenuItems.scss'
import {useGetMenuQuery} from "../../feature/api/apiSlice";

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
                        <div className="menuContainer__element" key={contentItem.id}>
                            <img src={contentItem.img} alt={contentItem.name} width="300" height={200}/>
                            <div className="menuContainer__element--description">
                                <p className="descriptionName">{contentItem.name}</p>
                                <span>price:<p>{contentItem.price}</p></span>
                            </div>
                        </div>
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
