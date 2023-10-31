import { useColor } from "../../context/StyleContext";

interface Props {
  id: number;
  storeId: number;
  imgUrl: string;
  title: string;
  brand: string;
  price: number;
}

export function SectionCard({
  id,
  storeId,
  imgUrl,
  title,
  brand,
  price,
}: Props) {
  const { backgroundColor } = useColor();

  return (
    <article className="text-start bg-white rounded-2xl overflow-hidden">
      <a href={`/${storeId}/${id}`}>
        <img className="p-1 w-full" src={imgUrl} alt="" />
        <div className="body p-2">
          <h3 className="opacity-30 uppercase">{brand}</h3>
          <p className="text-base">{title}</p>
          <div className="flex justify-between mt-2">
            <p className="text-pink-400 text-xl font-bold">S/{price}</p>
            <div
              style={{ backgroundColor }}
              className="w-8 h-8 bg-pink-400 rounded-full text-white flex justify-center items-center"
            >
              <i className="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}
