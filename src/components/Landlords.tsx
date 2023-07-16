import LandlordsImg from "../assets/images/landlord.jpg";

export default function Landlords() {
  return (
    <div className="md:grid md:grid-cols-2">
      <div className="relative">
        <img
          src={LandlordsImg}
          alt="Landlords"
          className="w-full h-full aspect-square object-cover"
        />
        <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-14 aspect-square shadow-lg text-2xl">
          &#9654;
        </button>
      </div>
      <div className="p-12 md:p-24 grid place-items-center">
        <div>
          <h2 className="text-2xl mb-8 font-extralight">Landlords</h2>
          <p className="mb-4">
            We find you tenants and help with referencing, contracts and more if
            you need it.
          </p>
          <p className="mb-12">
            OpenRent gives you the best possible chance of finding your ideal
            tenant, and you stay in control.
          </p>
          <ul className="text-lg font-light leading-loose mb-8">
            <li>
              <span className="text-brand mr-2">&#10003;</span> 100% Free
              Advertising Option
            </li>
            <li>
              <span className="text-brand mr-2">&#10003;</span> No Hidden Fees
            </li>
            <li>
              <span className="text-brand mr-2">&#10003;</span> No Renewal Fees
            </li>
            <li>
              <span className="text-brand mr-2">&#10003;</span> No Credit Card
              to Get Started
            </li>
          </ul>
          <a
            href="https://www.openrent.co.uk/landlords-advertise-property-for-rent-on-rightmove-and-zoopla"
            className="btn-outline inline-block py-3 px-5"
            aria-label="Learn more about becoming a landlord with OpenRent"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
