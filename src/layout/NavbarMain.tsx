import { useRef, useState } from "react";

export const NavbarMain = () => {
  const [isActiveMenu, _setIsActiveMenu] = useState(true);
  const menuMobile = useRef<HTMLDivElement | null>(null);

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
      <nav className="bg-cyan-800 text-white p-4 top-0 z-30">
        <div className="container mx-auto">
          <div
            style={{ gridTemplateColumns: "max-content 1fr max-content" }}
            className="grid  items-center text-base"
          >
            <i
              onClick={onMenuMobile}
              className="fa-solid fa-bars-staggered icon"
            ></i>
            <h2 className="justify-self-center text-2xl font-bold">
              <img src="/images/logo.png" alt="" />
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
              <h2 className="font-bold text-xl text-center">tienda</h2>
              <p className="font-bold text-2xl">x</p>
            </div>
            <ul className="">
              <li className="p-4 flex justify-between hover:bg-slate-200 cursor-pointer ">
                <p>Home</p>
                <i className="fa-solid fa-arrow-right"></i>
              </li>
              <li className="p-4 flex justify-between hover:bg-slate-200 cursor-pointer ">
                <p>Crear tienda</p>
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
};
