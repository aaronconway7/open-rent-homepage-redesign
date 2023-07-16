import Container from "./Container";

export default function Mentions() {
  return (
    <Container className="py-12 md:pb-24">
      <h2 className="text-center mb-8 text-2xl font-extralight">
        People are talking about us!
      </h2>
      <div className="flex flex-wrap gap-x-14 gap-y-4 justify-center">
        {logos.map((logo) => (
          <a href={logo.href} key={logo.alt} target="_blank">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-24 md:w-32 aspect-[3/2] object-contain grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            />
          </a>
        ))}
      </div>
    </Container>
  );
}

const logos = [
  {
    src: "src/assets/images/logos/bbc.png",
    alt: "BBC",
    href: "https://youtu.be/3N8bksMCgy0?t=63",
  },
  {
    src: "src/assets/images/logos/mirror.png",
    alt: "Mirror",
    href: "https://www.mirror.co.uk/money/sick-letting-agent-fees-5-6190595",
  },
  {
    src: "src/assets/images/logos/the-telegraph.png",
    alt: "The Telegraph",
    href: "https://www.telegraph.co.uk/finance/businessclub/11518211/Through-the-keyhole-the-new-ways-to-market-invest-in-and-sell-properties.html",
  },
  {
    src: "src/assets/images/logos/the-sun.png",
    alt: "The Sun",
    href: "https://www.thesun.co.uk/money/6142173/avoid-letting-agent-landlord-fees/",
  },
  {
    src: "src/assets/images/logos/express.png",
    alt: "Express",
    href: "https://www.express.co.uk/life-style/property/448060/How-to-save-1-600-in-letting-agent-fees-next-time-you-re-renting",
  },
  {
    src: "src/assets/images/logos/forbes.png",
    alt: "Forbes",
    href: "https://www.forbes.com/sites/trevorclawson/2014/08/29/its-not-all-about-the-money-trading-equity-for-services/",
  },
  {
    src: "src/assets/images/logos/tech-crunch.png",
    alt: "Tech Crunch",
    href: "https://techcrunch.com/2017/03/03/openrent-the-uk-online-letting-agent-picks-up-4-4m-from-rocket-internets-gfc/",
  },
];
