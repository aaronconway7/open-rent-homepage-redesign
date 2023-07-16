import properties from "../data/properties";
import Property from "./Property";

export default function PropertyGrid() {
  return (
    <div className="p-8 py-14 md:pt-20 md:pb-0 overflow-hidden relative bg-slate-100">
      <h2 className="text-center text-2xl mb-12 font-bold">
        Some of our available and recently let properties
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 mb-4">
        {properties.map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </div>
      <PrimaryLink className="md:hidden" />
      <div className="hidden md:grid bg-gradient-to-t from-white from-50% to-transparent absolute w-full h-1/2 left-0 bottom-0">
        <PrimaryLink className="mb-40 self-end justify-self-center" />
      </div>
    </div>
  );
}

function PrimaryLink({ className }: { className?: string }) {
  return (
    <a
      href="https://www.openrent.co.uk/find-flats-and-houses-for-rent-online"
      className={`btn inline-block py-3 px-5 rounded-lg ${className}`}
    >
      Begin search
    </a>
  );
}
