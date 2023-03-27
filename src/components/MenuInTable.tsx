import React from "react";
import {useGetMenuQuery} from "../feature/api/apiSlice";

const MenuInTable = () => {
    const {
        data: menu,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetMenuQuery();

    let data;
    if (isLoading) {
        data = 'Loading...';
    } else if (isSuccess) {
        data = menu.map((el) => {
            return (
                <option key={el.id} value={el.name}>
                    {el.name} {el.price}
                </option>
            );
        });
    } else if (isError) {
        data = "Something went wrong";
    }

    return <>{data}</>;
};

export default MenuInTable;
