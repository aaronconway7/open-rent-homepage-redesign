import Container from "./Container";

import OpenRentLogo from "../assets/images/logos/open-rent.png";

export const Footer = () => {
  return (
    <footer className="border-t border-brand border-opacity-50">
      <Container className="py-8">
        <div className="space-y-8 md:space-y-0 md:gap-20 md:flex md:items-start">
          <div>
            <a href="https://openrent.co.uk">
              <img
                src={OpenRentLogo}
                alt="OpenRent"
                className="w-40 mb-4 md:-ml-11"
              />
            </a>
            <p className="text-sm leading-relaxed opacity-75">
              Office 34
              <br />
              67-68 Hatton Garden
              <br />
              London
              <br />
              EC1N 8JY
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-sm">Company</h3>
            <ul className="space-y-1">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="link text-sm">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-sm">Resources</h3>
            <ul className="space-y-1">
              {resourceLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} className="link text-sm">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="font-light text-xs opacity-60">
          © 2012 - {new Date().getFullYear()} OpenRent Ltd.
        </p>
      </Container>
    </footer>
  );
};

const companyLinks = [
  {
    text: "Blog",
    href: "https://www.openrent.co.uk/blog",
  },
  {
    text: "Help Centre",
    href: "https://www.openrent.co.uk/kb",
  },
  {
    text: "Community",
    href: "https://www.openrent.co.uk/community",
  },
  {
    text: "Terms",
    href: "https://www.openrent.co.uk/terms",
  },
  {
    text: "Privacy",
    href: "https://www.openrent.co.uk/privacy",
  },
  {
    text: "Affiliates",
    href: "https://www.openrent.co.uk/affiliate",
  },
  {
    text: "Testimonials",
    href: "https://www.openrent.co.uk/testimonials-and-reviews-from-private-landlords",
  },
  {
    text: "Press",
    href: "https://www.openrent.co.uk/press",
  },
  {
    text: "Jobs",
    href: "https://www.openrent.co.uk/jobs",
  },
];

const resourceLinks = [
  {
    text: "Landlords",
    href: "https://www.openrent.co.uk/landlords-advertise-property-for-rent-on-rightmove-and-zoopla",
  },
  {
    text: "Tenants",
    href: "https://www.openrent.co.uk/find-property-to-rent-from-private-landlords",
  },
  {
    text: "Search houses for rent",
    href: "https://www.openrent.co.uk/find-flats-and-houses-for-rent-online",
  },
  {
    text: "Properties in London",
    href: "https://www.openrent.co.uk/properties-to-rent/london",
  },
  {
    text: "Properties in the UK",
    href: "https://www.openrent.co.uk/search-for-properties-to-rent",
  },
];
