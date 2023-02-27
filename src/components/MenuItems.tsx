import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useGetMenuQuery } from "../feature/api/apiSlice";
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
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {menu.map((contentItem) => {
          return (
            <SwiperSlide key={contentItem.id}>
              <div className="menuElement">
                <img src={contentItem.img} />
                <p>{contentItem.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <>{content}</>;
};
export default MenuItems;
