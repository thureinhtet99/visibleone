import {
  leftHandImageUrl,
  rightHandImageUrl,
  vectorFourUrl,
  vectorThreeUrl,
  vectorTwoUrl,
} from "../assets/imageUrl";
import EmailSubscription from "./email-subscription";

function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center bg-[#F8F5F0] px-4 text-[#1F392C] py-12"
      id="hero-section"
    >
      {/* Pink curve background (SVG or image) */}
      <img
        src={vectorThreeUrl}
        width={300}
        alt="curve-bg"
        className="absolute top-0 left-1 object-cover z-0"
      />
      <img
        src={vectorFourUrl}
        width={300}
        alt="curve-bg"
        className="absolute top-0 right-0 object-cover z-0"
      />

      {/* Left hand */}
      <img
        src={leftHandImageUrl}
        alt="left-hand"
        className="absolute -left-20 top-0 w-64 md:w-96 z-20"
        style={{ maxWidth: "400px" }}
      />

      {/* Right hand */}
      <img
        src={rightHandImageUrl}
        alt="right-hand"
        className="absolute right-1 bottom-0 w-64 md:w-96 z-20"
        style={{ maxWidth: "400px" }}
      />

      {/* Main content */}
      <div className="relative z-30 flex flex-col items-center gap-y-6 py-10 w-full">
        <h1 className="text-center font-extrabold leading-tight tracking-tight text-5xl sm:text-6xl lg:text-9xl max-w-6xl">
          Spark your brand's
          <span className="relative inline-block">
            <img
              src={vectorTwoUrl}
              alt="vector"
              className="w-full max-w-[700px] absolute -translate-x-1/2 left-90 bottom-1 z-10"
            />
            <span className="relative z-20 px-2">imaginative flair</span>
          </span>
          with us
        </h1>
        <p className="text-center max-w-3xl text-lg sm:text-xl leading-relaxed">
          Our team combines strategy, design, and technology to breathe life
          into your brand. Collaborate with us to leave a lasting impression on
          your audience.
        </p>
        <EmailSubscription />
      </div>
    </section>
  );
}
export default HeroSection;
