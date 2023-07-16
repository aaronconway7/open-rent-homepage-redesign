import properties from "../data/properties";
import Property from "./Property";

export default function PropertyGrid() {
  return (
    <div className="py-8 px-4 relative">
      <h2 className="text-center text-2xl mb-4">
        Some of our available and recently let properties
      </h2>
      <div className="grid gap-4 md:grid-cols-5">
        {[...properties, ...properties, ...properties].map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </div>
      <div className="bg-gradient-to-t from-white to-transparent absolute w-full h-full bottom-0"></div>
    </div>
  );
}