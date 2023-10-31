interface Props {
  imgUrl: string;
  title: string;
}

export function Category({ imgUrl, title }: Props) {
  return (
    <article className=" inline-flex flex-col items-center  w-full h-full ">
      <div className="w-full h-full  max-h-40">
        <img
          className="category-img rounded-xl object-contain max-h-40 bg-fuchsia-400"
          src={imgUrl}
        />
      </div>
      <h3 className="mt-1 capitalize text-base md:text-lg">{title}</h3>
    </article>
  );
}
