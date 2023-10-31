import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { SectionCard } from "./SectionCard.tsx";
import { useEffect, useState } from "react";

interface Props {
  storeName: string | undefined;
}
interface Product {
  brand: string;
  imgUrl: string;
  name: string;
  price: number;
  id: number;
}

export function SectionCategory({ storeName }: Props) {
  const [foods, setfoods] = useState([]);
  const [storeId, setStoreId] = useState(0);

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
      console.log(data.products);
      setStoreId(data.id);
      setfoods(data.products);
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
          slidesPerView: 3,
          slidesPerGroup: 3,
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
      // centerInsufficientSlides={true}
      slidesPerGroup={2}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={16}
      pagination={{ clickable: true }}
      slidesPerView={2}
      navigation={false}
      className="mySwiper"
    >
      {foods.map((e: Product) => (
        <SwiperSlide>
          <SectionCard
            imgUrl={e.imgUrl}
            brand={e.brand}
            title={e.name}
            price={e.price}
            id={e.id}
            storeId={storeId}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
