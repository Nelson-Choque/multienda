import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Category } from "./Category";

interface Props {
  storeName: string | undefined;
}
interface Category {
  imgUrl: string;
  name: string;
}
export function Categories({ storeName }: Props) {
  const [foods, setfoods] = useState([]);

  useEffect(() => {
    getStore();
  }, []);
  const getStore = async function () {
    try {
      // if (!storeId) {
      //   throw new Error("no se encontro la tienda");
      // }
      const res = await fetch(
        "https://multienda-api.3.us-1.fl0.io/store/" + storeName
      );
      const data = await res.json();

      setfoods(data.categories);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  return (
    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1024: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        1280: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      }}
      centerInsufficientSlides={true}
      slidesPerView={2}
      slidesPerGroup={2}
      spaceBetween={16}
      className="swiper-category"
      grabCursor={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      {foods.map((e: Category) => (
        <SwiperSlide>
          <Category
            imgUrl="https://www.elpalaciodehierro.com/on/demandware.static/-/Library-Sites-palacio-content-global/default/dw4d6d31b9/images/Home/Octubre-23/Home-16-22-octubre/flash-sale-20octubre/fc-flash-sale-moda-hombre.jpg"
            title={e.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

{
  /* <Category
imgUrl="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
title="polo"
/> */
}
