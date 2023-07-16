import { SyntheticEvent } from "react";
import Container from "./Container";

export default function PropertySearch() {
  const searchForProperties = (e: SyntheticEvent) => {
    e.preventDefault();
    // do something
  };

  return (
    <div className="bg-slate-100 text-center">
      <Container className="pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl mb-8 font-extralight">
            Looking for your next home?
          </h2>
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
              className="btn inline-block py-3 px-5 rounded-r-lg "
            >
              Search
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}
