import { useParams } from "react-router-dom";
import { Categories } from "./category/Categories";
import { SectionCategory } from "./section/Section";
import { Navbar } from "../../layout/Navbar";

export default function Home() {
  const { storeName } = useParams();

  console.log(storeName);
  return (
    <>
      <Navbar />

      <main className="px-4 mt-4">
        <div className="container">
          {/* <div className="sliders grid grid-cols-3 grid-rows-2 gap-4">
            <img
              className="w-full row-span-2 col-span-3 lg:col-span-2"
              src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt3bd21463d8f41fb8/65087e29e019056145ecab85/mc-dk-2-3-1809-JL.jpg"
              alt=""
            />
            <img
              className="hidden lg:block w-full"
              src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt3bd21463d8f41fb8/65087e29e019056145ecab85/mc-dk-2-3-1809-JL.jpg"
              alt=""
            />
            <img
              className="hidden lg:block w-full"
              src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/blt3bd21463d8f41fb8/65087e29e019056145ecab85/mc-dk-2-3-1809-JL.jpg"
              alt=""
            />
          </div> */}
          <div className="mt-4">
            <Categories storeName={storeName} />
          </div>

          <div className="w-full h-1 relative bottom-2 color-neutral"></div>

          <h2 className="category-title text-zinc-700 font-bold mt-4">
            Nuestros Productos
          </h2>
          <p className="category-text">Descubre lo mas nuevo</p>
          <div className="mt-4">
            <SectionCategory storeName={storeName} />
          </div>
        </div>
      </main>
    </>
  );
}
