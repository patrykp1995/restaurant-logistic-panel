import React from "react";
import { useGetMenuQuery } from "../feature/api/apiSlice";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

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
    data = <p>Loading...</p>;
  } else if (isSuccess) {
    data = menu.map((el) => {
      return (
        <option key={el.id} value={el.name}>
          {el.name}
        </option>
      );
    });
  } else if (isError) {
    data = <p>{error}</p>;
  }

  return <>{data}</>;
};

export default MenuInTable;
