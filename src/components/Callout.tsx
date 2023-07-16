import Container from "./Container";

import TrustPilotRating from "../assets/images/trustpilot.png";

export default function Callout() {
  return (
    <div className="bg-slate-100">
      <Container className="py-16 md:py-24">
        <h3 className="text-center font-bold text-4xl md:text-4xl">
          The <span className="text-brand">safer</span>,{" "}
          <span className="text-brand">faster</span> and{" "}
          <span className="text-brand">cheaper</span> way to rent.
        </h3>
        {/* Replace with actual trust pilot widget */}
        <img
          src={TrustPilotRating}
          alt="Trustplot Rating"
          className="w-32 mx-auto"
        />
      </Container>
    </div>
  );
}
