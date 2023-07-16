import Container from "./Container";

import BBCLogo from "../assets/images/logos/bbc.png";
import MirrorLogo from "../assets/images/logos/mirror.png";
import TheSunLogo from "../assets/images/logos/the-sun.png";
import ExpressLogo from "../assets/images/logos/express.png";
import TheTelegraphLogo from "../assets/images/logos/the-telegraph.png";
import ForbesLogo from "../assets/images/logos/forbes.png";
import TechCrunchLogo from "../assets/images/logos/tech-crunch.png";

export default function Mentions() {
  return (
    <Container className="py-12 md:pb-24 md:pt-0">
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
    src: BBCLogo,
    alt: "BBC",
    href: "https://youtu.be/3N8bksMCgy0?t=63",
  },
  {
    src: MirrorLogo,
    alt: "Mirror",
    href: "https://www.mirror.co.uk/money/sick-letting-agent-fees-5-6190595",
  },
  {
    src: TheTelegraphLogo,
    alt: "The Telegraph",
    href: "https://www.telegraph.co.uk/finance/businessclub/11518211/Through-the-keyhole-the-new-ways-to-market-invest-in-and-sell-properties.html",
  },
  {
    src: TheSunLogo,
    alt: "The Sun",
    href: "https://www.thesun.co.uk/money/6142173/avoid-letting-agent-landlord-fees/",
  },
  {
    src: ExpressLogo,
    alt: "Express",
    href: "https://www.express.co.uk/life-style/property/448060/How-to-save-1-600-in-letting-agent-fees-next-time-you-re-renting",
  },
  {
    src: ForbesLogo,
    alt: "Forbes",
    href: "https://www.forbes.com/sites/trevorclawson/2014/08/29/its-not-all-about-the-money-trading-equity-for-services/",
  },
  {
    src: TechCrunchLogo,
    alt: "Tech Crunch",
    href: "https://techcrunch.com/2017/03/03/openrent-the-uk-online-letting-agent-picks-up-4-4m-from-rocket-internets-gfc/",
  },
];
