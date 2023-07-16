import { SyntheticEvent } from "react";

export default function PropertySearch() {
  const searchForProperties = (e: SyntheticEvent) => {
    e.preventDefault();
    // do something
  };

  return (
    <div className="bg-slate-100 text-center py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl mb-4">Looking for your next home?</h3>
        <form className="flex" onSubmit={searchForProperties}>
          <label htmlFor="location-search" className="sr-only">
            Where do you want to live?
          </label>
          <input
            id="location-search"
            placeholder="Where do you want to live?"
            className="p-4 rounded-l-lg w-full"
          />
          <button
            type="submit"
            className="inline-block bg-brand py-3 px-5 rounded-r-lg text-white"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
