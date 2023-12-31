import Container from "./Container";

import PropertiesImg from "../assets/images/properties.jpg";
import RightmoveLogo from "../assets/images/logos/rightmove.png";
import ZooplaLogo from "../assets/images/logos/zoopla.png";
import PrimeLocationLogo from "../assets/images/logos/prime-location.png";

export default function Hero() {
  return (
    <Container className="py-24">
      <div className="grid gap-4 md:gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Find the <span className="text-brand italic">right</span> tenenats
            for your property
          </h1>
          <p className=" mb-6">
            List your property on OpenRent, Zoopla and Rightmove to find great
            tenants quickly.
          </p>
          <a
            href="https://www.openrent.co.uk/listing/add"
            className="btn inline-block py-3 px-5 rounded-lg mb-6 md:mb-16"
          >
            List my property
          </a>
          <div className="flex flex-wrap gap-x-4">
            {logos.map((logo) => (
              <a href={logo.href} key={logo.alt} target="_blank">
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
          <div className="absolute bg-white shadow-lg rounded p-3 -left-4 -top-4 w-min">
            <span className="inline-block text-brand text-2xl md:text-3xl font-semibold">
              965,352
            </span>
            <p className="text-xs md:text-sm">Properties let</p>
          </div>
          <div className="absolute bg-white shadow-lg rounded p-3 bottom-6 -right-4 lg:-right-8 max-w-min">
            <span className="inline-block text-brand text-2xl md:text-3xl font-semibold">
              5,638,963
            </span>
            <p className="text-xs md:text-sm">Registered landlords & tenants</p>
          </div>
          <img
            src={PropertiesImg}
            alt="Uk properties"
            className="rounded-2xl md:h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}

const logos = [
  {
    src: RightmoveLogo,
    alt: "Rightmove",
    href: "https://www.openrent.co.uk/rightmove",
  },
  {
    src: ZooplaLogo,
    alt: "Zoopla",
    href: "https://www.openrent.co.uk/zoopla",
  },
  {
    src: PrimeLocationLogo,
    alt: "PrimeLocation",
    href: "https://www.openrent.co.uk/primelocation",
  },
];
