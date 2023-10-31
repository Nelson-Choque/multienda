import { useEffect, useState } from "react";
import { NavbarMain } from "../../layout/NavbarMain";

interface Store {
  id: number;
  name: string;
  products: Product[];
}

interface Product {
  title: string;
  price: number;
  brand: string;
  imgUrl: string;
  name: string;
}

export const Store = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    getStore();
  }, []);
  const getStore = async function () {
    try {
      const res = await fetch("https://multienda-api.3.us-1.fl0.io/store/");
      const data = await res.json();

      console.log(data[0].products);

      setStore(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarMain />
      <main className="p-2 my-4">
        <img
          className="w-full overflow-hidden"
          src="https://images.ctfassets.net/rhgb4uz1u34u/4hqAi4CW76RfdtCw3BFvPM/04b323624949788cc8c0eb4bc61b0c1c/slider-regular-cel-1910-desktop.webp"
          alt=""
        />
        <div className="container">
          <h2 className="my-4 text-3xl font-semibold ">Las mejores tiendas</h2>
          <section className="grid grid-cols-1 gap-4 mt-4 ">
            {store.map((store: Store) => (
              <article className="rounded-2xl overflow-hidden">
                <div className="p-4 bg-cyan-800 flex items-center w-full text-white ">
                  <p className=" font-bold text-2xl rounded-2xl">
                    {store.name}
                  </p>
                  <span className="h-1 bg-cyan-800"></span>
                </div>
                <section className="grid grid-cols-2 lg:grid-cols-5 gap-4 py-4 bg-slate-100 ">
                  {store.products.map((product: Product) => (
                    <article className="text-start bg-white rounded-2xl overflow-hidden">
                      <img
                        style={{ minHeight: "60%" }}
                        className="p-1 w-full object-cover"
                        src={
                          product.imgUrl ||
                          "https://falabella.scene7.com/is/image/FalabellaPE/882953332_1?wid=240&hei=240&qlt=70&fmt=webp"
                        }
                        alt=""
                      />
                      <div className="body p-2">
                        <h3 className="opacity-30 uppercase">
                          {product.brand}
                        </h3>
                        <p className="text-base">{product.name}</p>
                        <div className="flex justify-between mt-2">
                          <p className="text-pink-400 text-xl font-bold">
                            S/{product.price}
                          </p>
                          <div className="w-8 h-8 bg-pink-400 rounded-full text-white flex justify-center items-center">
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </section>
                <button className="px-4 py-2 mt-4 block mx-auto bg-cyan-800 text-white rounded-2xl">
                  <a href={"/" + store.id}>ver mas</a>
                </button>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
};
