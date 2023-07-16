import TenantsImg from "../assets/images/tenants.jpg";

export default function Tenants() {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="p-12 md:p-24 grid place-items-center">
        <div>
          <h2 className="text-2xl mb-8 font-extralight">Tenants</h2>
          <p className="mb-12">
            On OpenRent there are never any admin fees. Ever. We take down
            listings as soon as they are let, so no more ghost adverts. And
            we'll protect your deposit and rent money.
          </p>
          <ul className="text-lg font-light leading-loose mb-8">
            <li>
              <span className="text-brand mr-2">&#10003;</span> No admin fees
            </li>
            <li>
              <span className="text-brand mr-2">&#10003;</span> No dead listings
            </li>
            <li>
              <span className="text-brand mr-2">&#10003;</span> Rent & deposit
              protected
            </li>
          </ul>
          <a
            href="https://www.openrent.co.uk/find-property-to-rent-from-private-landlords"
            className="btn-outline inline-block py-3 px-5"
            aria-label="Learn more about becoming a tenant with OpenRent"
          >
            Learn more
          </a>
        </div>
      </div>
      <div className="relative">
        <img
          src={TenantsImg}
          alt="Tenants"
          className="w-full h-full aspect-square object-cover"
        />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-14 aspect-square shadow-lg text-2xl">
          &#9654;
        </button>
      </div>
    </div>
  );
}
