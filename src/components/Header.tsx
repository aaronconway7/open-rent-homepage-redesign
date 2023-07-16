import Container from "./Container";

export default function Header() {
  return (
    <header className="sticky top-0 shadow w-full bg-white z-10 rounded">
      <Container className="flex justify-between items-center py-4">
        <img
          src="src/assets/images/logos/open-rent.png"
          alt="OpenRent"
          className="w-32"
        />
        <nav className="space-x-4 text-sm">
          <a className="bg-brand text-white font-medium px-4 py-2 rounded-lg">
            Add listing
          </a>
          <a className="text-brand font-light">Sign in</a>
        </nav>
      </Container>
    </header>
  );
}
