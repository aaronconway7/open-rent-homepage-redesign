export default function Hero() {
  return (
    <div className="px-4 md:grid md:grid-cols-2">
      <div className="p-4 space-y-4">
        <h1 className="text-3xl">Find the right tenenats for your property</h1>
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
      </div>
      <div className="p-4 relative">
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
