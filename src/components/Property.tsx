type PropertyProps = {
  id: number;
  image: string;
  beds: number;
  type: string;
  address: string;
  price: number;
  letAgreed?: boolean;
  href: string;
};

export default function Property({
  id,
  image,
  beds,
  type,
  address,
  price,
  href,
  letAgreed,
}: PropertyProps) {
  return (
    <a
      href={href}
      key={id}
      className="relative shadow-lg rounded-lg overflow-hidden"
    >
      <img src={image} alt="" className="w-full" />
      {letAgreed && (
        <span className="absolute top-2 right-2 text-sm bg-brand text-white rounded py-1 px-2">
          Let agreed
        </span>
      )}
      <div className="p-4">
        <h4 className="text-2xl">
          {beds} bed {type.toLocaleLowerCase()}
        </h4>
        <p className="opacity-75">{address}</p>
        <p className="text-lg mt-4 font-bold">£{price.toLocaleString()} p/m</p>
      </div>
    </a>
  );
}
