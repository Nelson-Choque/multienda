import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SectionCategory } from "../home/section/Section";
import { Navbar } from "../../layout/Navbar";
import { useColor } from "../context/StyleContext";

interface Product {
  name: string;
  description: string;
  price: number;
  brand: string;
  imgUrl: string;
}

export function Product() {
  const [food, setFood] = useState<Product | null>(null);

  const { color, backgroundColor } = useColor();

  const { storeName } = useParams();
  const { productId } = useParams();
  useEffect(() => {
    getStore();
  }, []);
  const getStore = async function () {
    try {
      if (!storeName) {
        throw new Error("no se encontro la store ");
      }
      if (!productId) {
        throw new Error("no se encontro el producto id");
      }

      const res = await fetch("http://localhost:8080/store/" + storeName);
      const data = await res.json();

      const foods: any[] = data.products;
      const food = foods.find((e) => {
        console.log(e);
        return e.id === parseInt(productId);
      });

      console.log({ foods, food, productId, storeName });

      setFood(food);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <main className="p-4">
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="">
              <img className="w-full" src={food?.imgUrl} alt="" />
            </div>
            <div className="">
              <h3 className="mt-4 uppercase opacity-30 text-2xl font-bold">
                {food?.brand}
              </h3>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">{food?.name}</h2>
              </div>
              <p
                style={{ color }}
                className="text-color-primary font-bold text-3xl my-2"
              >
                S/{food?.price}
              </p>
              <p className="mt-4 text-xl">{food?.description}</p>
              <p className="mt-4 text-xl capitalize font-semibold">size:</p>
              <section className="mt-4 flex gap-4">
                <article className="bg-white p-4 rounded-2xl">S</article>
                <article className="bg-white p-4 rounded-2xl">M</article>
                <article className="bg-white p-4 rounded-2xl">L</article>
                <article className="bg-white p-4 rounded-2xl">XL</article>
              </section>
              <div className="mt-4 flex gap-4 items-center">
                <i className="bg-pink-200 text-pink-500 p-4 rounded-2xl fa-regular fa-heart icon"></i>
                <div
                  style={{ background: backgroundColor }}
                  className="bg-pink-400 font-semibold text-white w-full p-4 text-xl text-center rounded-2xl color-primary"
                >
                  Añadir al carrito
                </div>
              </div>
            </div>
          </div>

          <section className="mt-8 text-xl font-semibold">
            <h2 className="category-title">Otros productos:</h2>
            <div className="mt-4">
              <SectionCategory storeName={storeName} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
