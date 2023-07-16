import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 shadow w-full bg-white z-10 rounded">
      <Container className="flex justify-between items-center py-4">
        <a href="https://openrent.co.uk">
          <img
            src="src/assets/images/logos/open-rent.png"
            alt="OpenRent"
            className="w-32"
          />
        </a>
        <nav className="space-x-4 text-sm">
          <a
            href="https://www.openrent.co.uk/listing/add"
            className="btn px-4 py-2 rounded-lg"
          >
            Add listing
          </a>
          <a
            href="https://www.openrent.co.uk/account/simplelogon"
            className="link"
          >
            Sign in
          </a>
        </nav>
      </Container>
    </header>
  );
}
