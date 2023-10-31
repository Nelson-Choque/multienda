import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useColor } from "../components/context/StyleContext";

export function Navbar() {
  const [titleStore, setTitleStore] = useState("Tienda");
  const [isActiveMenu, _setIsActiveMenu] = useState(true);
  const { storeName } = useParams();
  const menuMobile = useRef<HTMLDivElement | null>(null);
  const { color, setColor } = useColor();

  useEffect(() => {
    getStore();
  }, []);
  const getStore = async function () {
    try {
      console.log(storeName);

      if (!storeName) {
        throw new Error("no se encontro la tienda");
      }
      const res = await fetch(
        "https://multienda-api.3.us-1.fl0.io/store/" + storeName
      );
      const data = await res.json();
      setColor(data.color);
      setTitleStore(data.name);
    } catch (error) {
      console.log(error);
    }
  };
  const onMenuMobile = function () {
    const $menu = menuMobile.current;

    if (!$menu) return;

    $menu.classList.add("menu-mobile--active");
  };
  const removeMenuMobile = function () {
    const $menu = menuMobile.current;

    if (!$menu) return;

    $menu.classList.remove("menu-mobile--active");
  };

  return (
    <>
      <nav
        style={{ color }}
        className="bg-white text-pink-400 p-4 sticky top-0 z-30"
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-3 items-center text-base">
            <i
              onClick={onMenuMobile}
              className="fa-solid fa-bars-staggered icon"
            ></i>
            <h2 className="justify-self-center text-2xl font-bold">
              <a className="text-center inline-block" href="/">
                {titleStore}
              </a>
            </h2>
            <i className="fa-solid fa-cart-shopping justify-self-end icon"></i>
          </div>
          <input
            className="px-4 py-2 mt-4 w-full rounded-2xl text-black bg-slate-50"
            type="text"
            placeholder="buscar"
          />
        </div>
      </nav>
      {isActiveMenu && (
        <div
          ref={menuMobile}
          onClick={removeMenuMobile}
          className=" fixed w-full z-40 top-0 h-full menu-mobile  "
        >
          <div className="bg-slate-50 w-full max-w-sm z-40 top-0 h-full ">
            <div className=" flex justify-between items-center p-4">
              <h2 className="font-bold text-xl text-center">{titleStore}</h2>
              <p className="font-bold text-2xl">x</p>
            </div>
            <ul className="">
              <li className="p-4 flex justify-between hover:bg-slate-200 cursor-pointer ">
                <p>Home</p>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li className="p-4 flex justify-between hover:bg-slate-200 cursor-pointer ">
                <p>Productos</p>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li className="p-4 flex justify-between hover:bg-slate-200 cursor-pointer ">
                <p>Categorias</p>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li className="p-4 flex justify-between hover:bg-slate-200 cursor-pointer ">
                <p>Contact</p>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
