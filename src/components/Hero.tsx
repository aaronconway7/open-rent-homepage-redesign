const logos = [
  {
    src: "src/assets/images/logos/rightmove.png",
    alt: "Rightmove",
    href: "https://www.openrent.co.uk/rightmove",
  },
  {
    src: "src/assets/images/logos/zoopla.png",
    alt: "Zoopla",
    href: "https://www.openrent.co.uk/zoopla",
  },
  {
    src: "src/assets/images/logos/prime-location.png",
    alt: "PrimeLocation",
    href: "https://www.openrent.co.uk/primelocation",
  },
];

export default function Hero() {
  return (
    <div className="py-10 md:py-20 px-4 max-w-3xl mx-auto grid gap-4 md:grid-cols-2">
      <div className="space-y-4">
        <h1 className="text-3xl">
          Find the <span className="text-brand italic">right</span> tenenats for
          your property
        </h1>
        <p>
          List your property on OpenRent, Zoopla and Rightmove to find great
          tenants quickly.
        </p>
        <a
          href="https://www.openrent.co.uk/listing/add"
          className="inline-block bg-brand py-3 px-5 rounded-lg text-white"
        >
          List my property
        </a>
        <div className="flex flex-wrap gap-x-4">
          {logos.map((logo) => (
            <a href={logo.href} key={logo.alt}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-24 aspect-[3/2] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute bg-white shadow-lg rounded p-3 left-0 top-0">
          <h4 className="text-brand text-2xl">965,352</h4>
          <p>Properties let</p>
        </div>
        <div className="absolute bg-white shadow-lg rounded p-3 bottom-0 right-0">
          <h4 className="text-brand text-2xl">5,638,963</h4>
          <p>Registered landlords & tenants</p>
        </div>
        <img
          src="src/assets/images/properties.jpg"
          alt="Uk properties"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
